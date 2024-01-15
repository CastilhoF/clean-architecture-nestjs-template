import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';
import CurrencyEnum from '../../../../application/enumerators/currency.enum';
import DomainException from '../../../../application/exception/domain.exception';

class Currency extends BaseWrapper<string> {
  private constructor(value: string, label: string) {
    super(value, label);
  }

  public static create(value: string, label = 'currency'): Currency {
    return new Currency(value, label);
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);
    StringValidator.isMinLength(value, 3, this.label);
    StringValidator.isMaxLength(value, 3, this.label);

    if (!value || value !== CurrencyEnum[value.toUpperCase()]) {
      const message = `${this.label} must be a valid currency`;
      throw DomainException.invalidData(message, Currency.name);
    }

    return true;
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this.validate(value);
    this._value = value;
  }
}

export default Currency;
