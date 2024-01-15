import BaseWrapper from '../_/base.wrapper';
import NumberValidator from '../_/validator/number.validator';

class Integer extends BaseWrapper<number> {
  private readonly _min: number;
  private readonly _max: number;

  private constructor(value: number, label: string, min: number, max: number) {
    super(value, label);
    this._min = min;
    this._max = max;
    this.postValidate(value);
  }

  public static create(
    value: number,
    label = 'integer',
    min?: number,
    max?: number,
  ): Integer {
    return new Integer(value, label, min, max);
  }

  protected validate(value: number): boolean {
    NumberValidator.isInteger(value, this.label);
    NumberValidator.isPositive(value, this.label);
    return true;
  }

  protected postValidate(value: number): boolean {
    if (this._min !== null && this._min !== undefined) {
      NumberValidator.isMin(value, this._min, this.label);
    }

    if (this._max !== null && this._max !== undefined) {
      NumberValidator.isMax(value, this._max, this.label);
    }

    return true;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this.validate(value);
    this.postValidate(value);
    this._value = value;
  }
}

export default Integer;
