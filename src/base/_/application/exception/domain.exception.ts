import { Logger } from '@nestjs/common';
import ExceptionEnum from './dto/exception.enum';

class DomainException extends Error {
  name: string;
  code: ExceptionEnum;
  message: string;
  stack: string;

  constructor(message: string, code: ExceptionEnum, stack?: string) {
    super(message);
    this.name = DomainException.name;
    this.code = code;
    this.stack = stack;
  }

  static notFound(entity: string, stack?: string): DomainException {
    const fullMessage = `${entity} not found`;
    Logger.error(fullMessage, stack, entity);
    return new DomainException(fullMessage, ExceptionEnum.NOT_FOUND, stack);
  }

  static invalidData(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.INVALID, stack);
  }

  static conflict(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.CONFLICT, stack);
  }

  static invalidOperation(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.INVALID, stack);
  }

  static unauthorized(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.UNAUTHORIZED, stack);
  }

  static badRequest(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.BAD_REQUEST, stack);
  }

  static internalError(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.INTERNAL_ERROR, stack);
  }

  static other(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.OTHER, stack);
  }

  static forbidden(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.FORBIDDEN, stack);
  }

  static alreadyExists(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.ALREADY_EXISTS, stack);
  }

  static notImplemented(message: string, stack?: string): DomainException {
    Logger.error(message, stack);
    return new DomainException(message, ExceptionEnum.NOT_IMPLEMENTED, stack);
  }
}

export default DomainException;
