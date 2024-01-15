import {
  Injectable,
  Logger,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  private readonly configService: ConfigService = new ConfigService();
  private readonly logger = new Logger(AuthorizationMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const { headers } = req;
    const key = this.configService.get('APP_API_KEY');
    headers['x-api-key'] === key
      ? next()
      : next(
          new UnauthorizedException(
            this.logger.error('Unauthorized server access.'),
          ),
        );
  }
}
