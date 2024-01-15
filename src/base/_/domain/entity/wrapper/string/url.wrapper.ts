import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';

class Url extends BaseWrapper<string> {
  private constructor(value: string, label: string) {
    super(value, label);
    this.postValidate(value);
  }

  public static create(value: string, label = 'url'): Url {
    return new Url(value, label);
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);
    return true;
  }

  protected postValidate(value: string): boolean {
    StringValidator.isMinLength(value, 3, this.label);
    StringValidator.isMaxLength(value, 255, this.label);
    StringValidator.isUrl(value, this.label);
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

export default Url;
