import { ConfigService } from '@nestjs/config';
import RepositoryCacheInterface from '../../../application/environment/repository.cache.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
class RepositoryCacheEnvironment implements RepositoryCacheInterface {
  constructor(private readonly configService: ConfigService) {}

  public getCacheHost(): string {
    return this.configService.get<string>('CACHE_HOST');
  }

  public getCachePort(): number {
    return this.configService.get<number>('CACHE_PORT');
  }

  public getCachePassword(): string {
    return this.configService.get<string>('CACHE_PASSWORD');
  }

  public getCacheLogicalDb(): number {
    return this.configService.get<number>('CACHE_DATABASE_LOGICAL');
  }

  public getCacheTtl(): number {
    return this.configService.get<number>('CACHE_TTL');
  }
}

export default RepositoryCacheEnvironment;
