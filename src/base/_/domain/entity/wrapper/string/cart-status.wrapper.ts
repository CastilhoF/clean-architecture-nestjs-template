import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';
import CartStatusEnum from '../../../../application/enumerators/cart-status.enum';
import DomainException from '../../../../application/exception/domain.exception';

class CartStatus extends BaseWrapper<string> {
  private constructor(value: string, label: string) {
    super(value, label);
  }

  public static create(value: string, label = 'cart status'): CartStatus {
    return new CartStatus(value, label);
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);
    StringValidator.isMinLength(value, 3, this.label);
    StringValidator.isMaxLength(value, 20, this.label);

    if (!value || value !== CartStatusEnum[value.toUpperCase()]) {
      const message = `${this.label} must be a valid cart status`;
      throw DomainException.invalidData(message, CartStatus.name);
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

export default CartStatus;
