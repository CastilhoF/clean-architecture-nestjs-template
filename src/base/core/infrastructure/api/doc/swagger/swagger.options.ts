import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import ApplicationEnvironment from '../../../environment/application/application.environment';

@Injectable()
class SwaggerOptions {
  constructor(private readonly applicationService: ApplicationEnvironment) {}

  public setup(app: INestApplication) {
    const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
      .setTitle(this.applicationService.getAppName())
      .setDescription(this.applicationService.getAppDescription())
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(
      `${this.applicationService.getAppPrefix()}/api`,
      app,
      document,
    );
  }
}

export default SwaggerOptions;
