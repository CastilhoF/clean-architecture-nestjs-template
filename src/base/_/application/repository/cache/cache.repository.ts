abstract class CacheRepository<DTO> {
  abstract get(key: string): Promise<DTO | null>;
  abstract set(key: string, value: DTO): Promise<void>;
  abstract del(key: string): Promise<void>;
  abstract exists(key: string): Promise<boolean>;
  abstract expire(key: string, seconds: number): Promise<void>;
  abstract getKeys(pattern: string): Promise<string[]>;
  abstract purge(): Promise<void>;
}

export default CacheRepository;
