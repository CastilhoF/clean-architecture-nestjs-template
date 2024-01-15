import { Injectable } from '@nestjs/common';
import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import RepositoryCacheEnvironment from '../../environment/database/repository.cache.environment';

@Injectable()
class RepositoryCacheOptions implements CacheOptionsFactory {
  constructor(
    private readonly repositoryCacheConfig: RepositoryCacheEnvironment,
  ) {}

  createCacheOptions(): CacheModuleOptions<Record<string, any>> {
    const cachePassword = this.repositoryCacheConfig.getCachePassword();

    const payload: CacheModuleOptions = {
      store: redisStore,
      host: this.repositoryCacheConfig.getCacheHost(),
      port: this.repositoryCacheConfig.getCachePort(),
      database: this.repositoryCacheConfig.getCacheLogicalDb(),
      ttl: this.repositoryCacheConfig.getCacheTtl(),
      isGlobal: true,
      max: 1000,
    };

    if (cachePassword) payload['password'] = cachePassword;

    return payload;
  }
}

export default RepositoryCacheOptions;
