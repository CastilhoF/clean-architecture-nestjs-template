interface AuthenticationInterface {
  getJwtSecret(): string;
  getJwtExpirationTime(): string;
}

export default AuthenticationInterface;
