import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import RepositoryCacheOptions from '../config/repository.cache.options';
import RepositoryCacheEnvironment from '../../environment/database/repository.cache.environment';

const databaseCacheProvider: CacheModuleAsyncOptions<RedisClientOptions> = {
  useClass: RepositoryCacheOptions,
  isGlobal: true,
  extraProviders: [RepositoryCacheEnvironment],
};

export default databaseCacheProvider;
