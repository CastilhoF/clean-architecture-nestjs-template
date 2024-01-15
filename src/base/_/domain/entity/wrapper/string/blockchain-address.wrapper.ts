import DomainException from '../../../../application/exception/domain.exception';
import ExceptionEnum from '../../../../application/exception/dto/exception.enum';
import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';

class BlockchainAddress extends BaseWrapper<string> {
  private constructor(value: string, label: string) {
    super(value, label);
  }

  public static create(value: string, label: string): BlockchainAddress {
    return new BlockchainAddress(value, label);
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);

    return true;
  }

  protected postValidate(value: string): boolean {
    StringValidator.isMinLength(value, 42, this.label);
    StringValidator.isMaxLength(value, 42, this.label);

    if (!/^0x[0-9A-Fa-f]{40}$/.test(value))
      throw new DomainException(
        `${this.label} must be a valid Ethereum address (40 hex characters)`,
        ExceptionEnum.BAD_REQUEST,
        BlockchainAddress.name,
      );

    return true;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this.validate(value);
    this.postValidate(value);
    this._value = value;
  }
}

export default BlockchainAddress;
