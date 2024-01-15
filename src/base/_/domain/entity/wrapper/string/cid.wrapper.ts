import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';

class CID extends BaseWrapper<string> {
  private constructor(value: string, label: string) {
    super(value, label);
  }

  public static create(value: string, label = 'cid'): CID {
    return new CID(value, label);
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);

    return true;
  }

  protected postValidate(value: string): boolean {
    // 46 (v1) or 59 (v2)
    StringValidator.isMinLength(value, 59, this.label) ||
      StringValidator.isMinLength(value, 46, this.label);
    StringValidator.isMaxLength(value, 59, this.label) ||
      StringValidator.isMaxLength(value, 46, this.label);

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

export default CID;
