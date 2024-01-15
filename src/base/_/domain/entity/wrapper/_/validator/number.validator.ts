import PreValidatorInterface from './_/pre-validator.interface';
import DomainException from '../../../../../application/exception/domain.exception';

class NumberValidator implements PreValidatorInterface<number> {
  public isValid(value: number, label = 'value'): boolean {
    if (!NumberValidator.isNotNullOrUndefined(value, label)) {
      const message = `${label} is required`;
      throw DomainException.invalidData(message);
    }

    if (typeof value !== 'number') {
      const message = `${label} must be a number`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isValid(value: number, label = 'value'): boolean {
    return new NumberValidator().isValid(value, label);
  }

  private static isNotNullOrUndefined(value: number, label = 'value'): boolean {
    if (value === null || value === undefined) {
      const message = `${label} is required`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isInteger(value: number, label = 'value'): boolean {
    NumberValidator.isValid(value, label);

    if (!Number.isInteger(value)) {
      const message = `${label} must be an integer`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isPositive(value: number, label = 'value'): boolean {
    NumberValidator.isValid(value, label);

    if (value < 0) {
      const message = `${label} must be a positive number`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isNotZero(value: number, label = 'value'): boolean {
    NumberValidator.isValid(value, label);

    if (value === 0) {
      const message = `${label} must be a non-zero number`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isMin(value: number, min: number, label = 'value'): boolean {
    NumberValidator.isValid(value, label);

    if (value < min) {
      const message = `${label} must be greater than or equal to ${min}`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isMax(value: number, max: number, label = 'value'): boolean {
    NumberValidator.isValid(value, label);

    if (value > max) {
      const message = `${label} must be less than or equal to ${max}`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isNumberString(value: string): boolean {
    if (!value) return false;

    const pattern = new RegExp('^[0-9]*$');

    return !!pattern.test(value);
  }
}

export default NumberValidator;
