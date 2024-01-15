import BaseWrapper from '../_/base.wrapper';
import BooleanValidator from '../_/validator/boolean.validator';

class BooleanCustom extends BaseWrapper<boolean> {
  private constructor(value: boolean, label: string) {
    super(value, label);
  }

  public static create(value: boolean, label = 'boolean'): BooleanCustom {
    return new BooleanCustom(value, label);
  }

  public static stringToBoolean(value: string | boolean): boolean {
    if (value === 'true' || value === true) {
      return true;
    }

    if (value === 'false' || value === false) {
      return false;
    }

    return null;
  }

  protected validate(value: boolean): boolean {
    BooleanValidator.isValid(value, this.label);
    return true;
  }

  public get value(): boolean {
    return this._value;
  }

  public set value(value: boolean) {
    this.validate(value);
    this._value = value;
  }
}

export default BooleanCustom;
