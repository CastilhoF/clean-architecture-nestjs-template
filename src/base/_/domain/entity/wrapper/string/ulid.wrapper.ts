import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';
import DomainException from '../../../../application/exception/domain.exception';
import UlidGenerator from '../../../../application/helper/generator/ulid/ulid.generator';

class ULID extends BaseWrapper<string> {
  private constructor(value: string, label: string) {
    super(value, label);
    this.postValidate(value);
  }

  public static create(value: string, label = 'ULID'): ULID {
    return new ULID(value, label);
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);
    StringValidator.isMinLength(value, 26, this.label);
    StringValidator.isMaxLength(value, 26, this.label);
    return true;
  }

  protected postValidate(value: string): boolean {
    if (!UlidGenerator.validate(value))
      throw DomainException.invalidData(`${this.label} is not valid`);
    return true;
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this.validate(value);
    this.postValidate(value);
    this._value = value;
  }
}

export default ULID;
