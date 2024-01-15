import PreValidatorInterface from './_/pre-validator.interface';
import DomainException from '../../../../../application/exception/domain.exception';

class BooleanValidator implements PreValidatorInterface<boolean> {
  public isValid(value: boolean, label = 'value'): boolean {
    if (!BooleanValidator.isNotNullOrUndefined(value, label)) {
      const message = `${label} is required`;
      throw DomainException.invalidData(message);
    }

    if (typeof value !== 'boolean') {
      const message = `${label} must be a boolean`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isValid(value: boolean, label = 'value'): boolean {
    return new BooleanValidator().isValid(value, label);
  }

  private static isNotNullOrUndefined(
    value: boolean,
    label = 'value',
  ): boolean {
    if (value === null || value === undefined) {
      const message = `${label} is required`;
      throw DomainException.invalidData(message);
    }

    return true;
  }
}

export default BooleanValidator;
