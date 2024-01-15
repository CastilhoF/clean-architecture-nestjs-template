import { Provider } from '@nestjs/common';
import CacheRepository from '../../../../_/application/repository/cache/cache.repository';
import CacheRedisRepository from '../../../../_/infrastructure/repository/cache/cache.redis.repository';

class CacheServiceProvider {
  public static redis(): Provider {
    return {
      provide: CacheRepository,
      useClass: CacheRedisRepository,
    };
  }
}

export default CacheServiceProvider;
