import { Inject } from '@nestjs/common';
import CacheRepository from '../../../application/repository/cache/cache.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

class CacheRedisRepository<DTO> implements CacheRepository<DTO> {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  public async get(key: string): Promise<DTO> {
    return await this.cacheManager.get(key);
  }

  public async set(key: string, value: DTO): Promise<void> {
    await this.cacheManager.set(key, value);
  }

  public async del(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }

  public async exists(key: string): Promise<boolean> {
    return (await this.cacheManager.get(key)) !== undefined;
  }

  public async expire(key: string, ttl: number): Promise<void> {
    await this.cacheManager.set(key, { ttl: ttl });
  }

  public async getKeys(key: string): Promise<string[]> {
    return await this.cacheManager.get(key);
  }

  public async purge(): Promise<void> {
    await this.cacheManager.reset();
  }
}

export default CacheRedisRepository;
