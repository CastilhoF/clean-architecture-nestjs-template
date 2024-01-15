import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import DocModule from './api/doc/doc.module';
import EnvironmentModule from './environment/environment.module';
import CustomHttpModule from './http/custom-http.module';
import { AuthorizationMiddleware } from './middlewares/authorization.middleware';
import { RequestMiddleware } from './middlewares/request.middleware';
import DatabaseModule from './repository/database.module';
import JobService from '@/base/core/infrastructure/gateway/job/job.service';
import { HealthModule } from '@/health/health.module';

@Module({
  imports: [
    CustomHttpModule,
    DatabaseModule,
    DocModule,
    EnvironmentModule,
    EventEmitterModule.forRoot(),
    HealthModule,
    ScheduleModule.forRoot(),
  ],
  providers: [JobService],
  controllers: [],
  exports: [],
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestMiddleware, AuthorizationMiddleware)
      .exclude('(.*)/health-check')
      .forRoutes('admin/(.*)');
  }
}

export default AppModule;
