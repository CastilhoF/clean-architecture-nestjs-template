import ApplicationInterface from '../../../application/environment/application.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Environment from '../../../domain/entity/environment/environment.entity';

@Injectable()
class ApplicationEnvironment implements ApplicationInterface {
  constructor(private readonly configService: ConfigService) {}

  public getAppName(): string {
    return this.configService.get<string>('APP_NAME');
  }

  public getAppDescription(): string {
    return this.configService.get<string>('APP_DESCRIPTION');
  }

  public getAppHost(): string {
    return this.configService.get<string>('APP_HOST');
  }

  public getAppPort(): number {
    return this.configService.get<number>('APP_PORT');
  }

  public getNodeEnv(): Environment {
    return this.configService.get<Environment>('NODE_ENV');
  }

  public getAppPrefix(): string {
    return this.configService.get<string>('APP_PREFIX');
  }

  public getDisableJobs(): boolean {
    return this.configService.get<boolean>('APP_DISABLE_JOBS');
  }
}

export default ApplicationEnvironment;
