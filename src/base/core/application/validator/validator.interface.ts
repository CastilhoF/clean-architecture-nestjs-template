import { ValidationError, ValidatorOptions } from 'class-validator';

interface ValidatorInterface extends ValidatorOptions {
  always: boolean;
  disableErrorMessages: boolean;
  dismissDefaultMessages: boolean;
  enableDebugMessages: boolean;
  enableImplicitConversion: boolean;
  errorHttpStatusCode: number;
  exceptionFactory?: (errors: ValidationError[]) => any;
  forbidNonWhitelisted: boolean;
  forbidUnknownValues: boolean;
  groups?: string[];
  strictGroups?: boolean;
  skipMissingProperties: boolean;
  skipNullProperties: boolean;
  skipUndefinedProperties: boolean;
  stopAtFirstError: boolean;
  transform: boolean;
  'validationError.target': boolean;
  'validationError.value': boolean;
  whitelist: boolean;
}

export default ValidatorInterface;
