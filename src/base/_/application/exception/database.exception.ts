import { Logger } from '@nestjs/common';
import ExceptionEnum from './dto/exception.enum';

class DatabaseException extends Error {
  name: string;
  message: string;
  code: ExceptionEnum;
  stack: string;

  constructor(message: string, code: ExceptionEnum, stack?: string) {
    super(message);
    this.name = DatabaseException.name;
    this.code = code;
    this.stack = stack;
  }

  static Error(error: any, entity: string): DatabaseException {
    switch (error?.code) {
      case 'P2002':
      case 'P2003':
      case 'P2004':
        return DatabaseException.alreadyExists(entity, error?.stack);
      case 'P2000':
      case 'P2001':
      case 'P2005':
      case 'P2006':
      case 'P2007':
      case 'P2008':
      case 'P2009':
      case 'P2010':
      case 'P2011':
      case 'P2012':
      case 'P2013':
      case 'P2014':
      case 'P2016':
      case 'P2017':
      case 'P2019':
      case 'P2020':
      case 'P2023':
      case 'P2024':
      case 'P2026':
      case 'P2027':
      case 'P2028':
      case 'P2029':
      case 'P2030':
      case 'P2031':
        return DatabaseException.invalidData(error.message, error?.stack);
      case 'P2015':
      case 'P2018':
      case 'P2021':
      case 'P2022':
      case 'P2025':
        return DatabaseException.notFound(entity, error?.stack);
      default:
        return DatabaseException.genericException(error);
    }
  }

  public static alreadyExists(
    entity: string,
    stack?: string,
  ): DatabaseException {
    const fullMessage = `${entity.toLowerCase()} already exists`;
    return new DatabaseException(
      fullMessage,
      ExceptionEnum.ALREADY_EXISTS,
      stack,
    );
  }

  public static invalidData(
    message: string,
    stack?: string,
  ): DatabaseException {
    return new DatabaseException(message, ExceptionEnum.INVALID, stack);
  }

  public static notFound(entity: string, stack?: string): DatabaseException {
    const fullMessage = `${entity.toLowerCase()} not found.`;
    return new DatabaseException(fullMessage, ExceptionEnum.NOT_FOUND, stack);
  }

  public static genericException(error: any): DatabaseException {
    const message = 'oops! An error occurred with the database.';
    Logger.error(message, error?.stack);
    return new DatabaseException(message, ExceptionEnum.OTHER, error?.stack);
  }
}

export default DatabaseException;
