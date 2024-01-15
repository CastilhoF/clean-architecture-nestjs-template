import RepositoryRelationalInterface from '../../../application/environment/repository.relational.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class RepositoryRelationalEnvironment implements RepositoryRelationalInterface {
  constructor(private readonly configService: ConfigService) {}

  public getDatabaseType(): string {
    return this.configService.get<string>('DATABASE_TYPE');
  }

  public getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  public getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT');
  }

  public getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  public getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  public getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  public getDatabaseParams(): string {
    return this.configService.get<string>('DATABASE_PARAMS');
  }

  public getDatabaseURL(): string {
    const type = this.getDatabaseType();
    const host = this.getDatabaseHost();
    const port = this.getDatabasePort();
    const user = this.getDatabaseUser();
    const password = this.getDatabasePassword();
    const database = this.getDatabaseName();
    const params = this.getDatabaseParams();

    return `${type}://${user}:${password}@${host}:${port}/${database}${params}`;
  }
}

export default RepositoryRelationalEnvironment;
