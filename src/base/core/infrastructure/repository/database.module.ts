import { CacheModule } from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import type { RedisClientOptions } from 'redis';
import CacheRepository from '../../../_/application/repository/cache/cache.repository';
import RepositoryRelationalOptions from './config/repository.relational.options';
import CacheServiceProvider from './provider/cache-service.provider';
import databaseCacheProvider from './provider/database.cache.provider';

@Global()
@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>(databaseCacheProvider),
  ],
  providers: [RepositoryRelationalOptions, CacheServiceProvider.redis()],
  controllers: [],
  exports: [RepositoryRelationalOptions, CacheRepository],
})
class DatabaseModule {}

export default DatabaseModule;
