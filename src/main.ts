import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import SwaggerOptions from './base/core/infrastructure/api/doc/swagger/swagger.options';
import DomainFilterException from './base/core/infrastructure/api/exception/domain-filter.exception';
import ValidatorOptions from './base/core/infrastructure/api/validator/config/validator.options';
import VersioningConfig from './base/core/infrastructure/api/versioning/versioning.config';
import AppModule from './base/core/infrastructure/app.module';
import JobService from '@/base/core/infrastructure/gateway/job/job.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  setupMiddlewares(app);
  await start(app);
}

function setupMiddlewares(app: INestApplication) {
  app.use(helmet());
  app.use(cookieParser());
  app.enableCors({
    credentials: true,
    origin: true,
  });
  app.setGlobalPrefix('clean-architecture-nestjs-template');
  app.enableVersioning(VersioningConfig.uri());
  app.useGlobalPipes(ValidatorOptions.validatorGlobal());
  app.useGlobalFilters(new DomainFilterException());
}

async function start(app: INestApplication) {
  const configService = app.get(ConfigService);
  const host = configService.get('APP_HOST');
  const port = configService.get('APP_PORT');

  app.get(SwaggerOptions).setup(app);

  await app.listen(port, host, async () => {
    Logger.log(`App listen on ${await app.getUrl()}`, 'NestApplication');

    await app.get(JobService).config();
  });
}

bootstrap().then();
