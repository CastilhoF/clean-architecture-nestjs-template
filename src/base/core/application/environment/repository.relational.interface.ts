interface RepositoryRelationalInterface {
  getDatabaseType(): string;
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseName(): string;
  getDatabaseUser(): string;
  getDatabasePassword(): string;
  getDatabaseParams(): string;
  getDatabaseURL(): string;
}

export default RepositoryRelationalInterface;
