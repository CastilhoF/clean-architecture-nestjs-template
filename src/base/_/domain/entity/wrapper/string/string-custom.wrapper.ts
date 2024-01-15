import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';

class StringCustom extends BaseWrapper<string> {
  private readonly _minLength: number;
  private readonly _maxLength: number;

  private constructor(
    value: string,
    label: string,
    minLength: number,
    maxLength: number,
  ) {
    super(value, label);
    this._minLength = minLength;
    this._maxLength = maxLength;
    this.postValidate(value);
  }

  public static create(
    value: string,
    label = 'string',
    minLength?: number,
    maxLength?: number,
  ): StringCustom {
    return new StringCustom(value, label, minLength, maxLength);
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);
    return true;
  }

  protected postValidate(value: string): boolean {
    if (this._minLength) {
      StringValidator.isMinLength(value, this._minLength, this.label);
    }

    if (this._maxLength) {
      StringValidator.isMaxLength(value, this._maxLength, this.label);
    }

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

export default StringCustom;
