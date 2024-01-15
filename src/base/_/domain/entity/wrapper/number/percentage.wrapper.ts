import BaseWrapper from '../_/base.wrapper';
import NumberValidator from '../_/validator/number.validator';

class Percentage extends BaseWrapper<number> {
  private constructor(value: number, label: string) {
    super(value, label);
  }

  public static create(value: number, label = 'percentage'): Percentage {
    return new Percentage(value, label);
  }

  protected validate(value: number): boolean {
    NumberValidator.isPositive(value, this.label);
    NumberValidator.isMin(value, 0, this.label);
    NumberValidator.isMax(value, 100, this.label);
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

export default Percentage;
