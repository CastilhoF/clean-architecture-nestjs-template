import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import ExceptionEnum from '../../../../_/application/exception/dto/exception.enum';
import DomainException from '../../../../_/application/exception/domain.exception';
import DatabaseException from '../../../../_/application/exception/database.exception';

@Catch(DomainException, DatabaseException)
class DomainFilterException implements ExceptionFilter {
  public catch(
    exception: DomainException | DatabaseException,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const message = exception.message;

    let status: HttpStatus;
    switch (exception.code) {
      case ExceptionEnum.ALREADY_EXISTS:
        status = HttpStatus.CONFLICT;
        break;
      case ExceptionEnum.CONFLICT:
        status = HttpStatus.CONFLICT;
        break;
      case ExceptionEnum.FORBIDDEN:
        status = HttpStatus.FORBIDDEN;
        break;
      case ExceptionEnum.INVALID:
        status = HttpStatus.BAD_REQUEST;
        break;
      case ExceptionEnum.NOT_FOUND:
        status = HttpStatus.NOT_FOUND;
        break;
      case ExceptionEnum.UNAUTHORIZED:
        status = HttpStatus.UNAUTHORIZED;
        break;
      case ExceptionEnum.BAD_REQUEST:
        status = HttpStatus.BAD_REQUEST;
        break;
      case ExceptionEnum.OTHER:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        break;
      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    response.status(status).json({
      status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}

export default DomainFilterException;
