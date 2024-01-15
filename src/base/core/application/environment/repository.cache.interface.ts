interface RepositoryCacheInterface {
  getCacheHost(): string;
  getCachePort(): number;
  getCachePassword(): string;
  getCacheLogicalDb(): number;
  getCacheTtl(): number;
}

export default RepositoryCacheInterface;
