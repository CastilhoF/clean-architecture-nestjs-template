import { HttpStatus, PipeTransform, ValidationPipe } from '@nestjs/common';
import EnvironmentOptions from '../../../environment/global/environment.options';
import EnvironmentEntity from '../../../../domain/entity/environment/environment.entity';
import ValidatorInterface from '../../../../application/validator/validator.interface';

class ValidatorOptions {
  public static validatorGlobal(): PipeTransform {
    const isDebug =
      EnvironmentOptions.getEnvironment() !== EnvironmentEntity.PRODUCTION;

    const options: ValidatorInterface = {
      always: true,
      disableErrorMessages: false,
      dismissDefaultMessages: false,
      enableDebugMessages: isDebug,
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      enableImplicitConversion: false,
      forbidNonWhitelisted: true,

      /** protection against xss and sqs injection attacks **/
      forbidUnknownValues: true,

      skipMissingProperties: false,
      skipNullProperties: false,
      skipUndefinedProperties: false,
      stopAtFirstError: false,
      transform: true,
      'validationError.target': true,
      'validationError.value': true,
      whitelist: true,
    };

    return new ValidationPipe(options);
  }
}

export default ValidatorOptions;
