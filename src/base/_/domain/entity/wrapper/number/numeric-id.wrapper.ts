import BaseWrapper from '../_/base.wrapper';
import NumberValidator from '../_/validator/number.validator';

class ID extends BaseWrapper<number> {
  private constructor(value: number, label: string) {
    super(value, label);
  }

  public static create(value: number, label = 'id'): ID {
    return new ID(value, label);
  }

  protected validate(value: number): boolean {
    NumberValidator.isNotZero(value, this.label);
    NumberValidator.isPositive(value, this.label);
    NumberValidator.isInteger(value, this.label);
    return true;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this.validate(value);
    this._value = value;
  }
}

export default ID;
