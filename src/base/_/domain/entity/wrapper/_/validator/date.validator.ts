import PreValidatorInterface from './_/pre-validator.interface';
import DomainException from '../../../../../application/exception/domain.exception';

class DateValidator implements PreValidatorInterface<Date> {
  public isValid(value: Date, label = 'value'): boolean {
    if (!(value instanceof Date)) {
      const message = `${label} must be a date`;
      throw DomainException.invalidData(message);
    }

    if (isNaN(value.getTime())) {
      const message = `${label} must be a valid date`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isValid(value: Date, label = 'value'): boolean {
    return new DateValidator().isValid(value, label);
  }

  public static isNotFuture(value: Date, label = 'value'): boolean {
    DateValidator.isValid(value, label);

    if (value.getTime() > Date.now()) {
      const message = `${label} must be a date in the past or present`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isNotPast(value: Date, label = 'value'): boolean {
    DateValidator.isValid(value, label);

    if (value.getTime() < Date.now()) {
      const message = `${label} must be a date in the present or future`;
      throw DomainException.invalidData(message);
    }

    return true;
  }
}

export default DateValidator;
