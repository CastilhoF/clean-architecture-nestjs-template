import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  private readonly logger = new Logger(RequestMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, params, query, body } = req;

    const requestLog: Partial<Request> = {
      method: method,
      url: originalUrl,
      params: params,
      query: query,
      body: body,
    };

    this.logger.debug(requestLog);

    next();
  }
}
