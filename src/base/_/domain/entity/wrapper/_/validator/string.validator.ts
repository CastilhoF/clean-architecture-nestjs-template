import PreValidatorInterface from './_/pre-validator.interface';
import DomainException from '../../../../../application/exception/domain.exception';

class StringValidator implements PreValidatorInterface<string> {
  public isValid(value: string, label = 'value'): boolean {
    if (
      !(
        StringValidator.isNotNullOrUndefined(value, label) &&
        StringValidator.isNotEmpty(value, label)
      )
    ) {
      const message = `${label} is required`;
      throw DomainException.invalidData(message);
    }

    if (typeof value !== 'string') {
      const message = `${label} must be a string`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isValid(value: string, label = 'value'): boolean {
    return new StringValidator().isValid(value, label);
  }

  private static isNotNullOrUndefined(value: string, label = 'value'): boolean {
    if (value === null || value === undefined) {
      const message = `${label} is required`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  private static isNotEmpty(value: string, label = 'value'): boolean {
    if (value === '') {
      const message = `${label} must be a non-empty`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isNotWhiteSpace(value: string, label = 'value'): boolean {
    StringValidator.isValid(value, label);

    const isWhiteSpaceRegex = /\s/g;
    if (isWhiteSpaceRegex.test(value)) {
      const message = `${label} must be a non-whitespace`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isMinLength(
    value: string,
    minLength: number,
    label = 'value',
  ): boolean {
    StringValidator.isValid(value, label);

    if (value.length < minLength) {
      const message = `${label} must be at least ${minLength} characters`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isMaxLength(
    value: string,
    maxLength: number,
    label = 'value',
  ): boolean {
    StringValidator.isValid(value, label);

    if (value.length > maxLength) {
      const message = `${label} must be at most ${maxLength} characters`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isUrl(value: string, label = 'value'): boolean {
    StringValidator.isValid(value, label);

    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?(\?.*)?$/;
    if (!urlRegex.test(value)) {
      const message = `${label} must be a valid url`;
      throw DomainException.invalidData(message);
    }

    return true;
  }

  public static isEmail(value: string, label = 'value'): boolean {
    StringValidator.isValid(value, label);

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(value)) {
      const message = `${label} must be a valid email`;
      throw DomainException.invalidData(message);
    }

    return true;
  }
}

export default StringValidator;
