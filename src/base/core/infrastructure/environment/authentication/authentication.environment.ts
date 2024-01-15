import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import AuthenticationInterface from '../../../application/environment/authentication.interface';

@Injectable()
class AuthenticationEnvironment implements AuthenticationInterface {
  constructor(private readonly configService: ConfigService) {}

  public getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  public getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRES');
  }
}

export default AuthenticationEnvironment;
