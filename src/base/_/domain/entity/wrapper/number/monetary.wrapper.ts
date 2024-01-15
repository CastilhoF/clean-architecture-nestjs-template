import BaseWrapper from '../_/base.wrapper';
import NumberValidator from '../_/validator/number.validator';

class Monetary extends BaseWrapper<number> {
  private constructor(value: number, label: string) {
    super(value, label);
  }

  public static create(value: number, label = 'monetary'): Monetary {
    return new Monetary(value, label);
  }

  public add(value: number): void {
    NumberValidator.isPositive(value, 'value');
    this.value = this.value = value;
  }

  public subtract(value: number): void {
    NumberValidator.isPositive(value, 'value');
    this.value = this.value - value;
  }

  public multiply(value: number): void {
    NumberValidator.isPositive(value, 'value');
    this.value = this.value * value;
  }

  public divide(value: number): void {
    NumberValidator.isPositive(value, 'value');
    this.value = this.value / value;
  }

  public discount(percentage: number): void {
    NumberValidator.isPositive(percentage, 'percentage');
    this.value = this.value * (1 - percentage / 100);
  }

  public increase(percentage: number): void {
    NumberValidator.isPositive(percentage, 'percentage');
    this.value = this.value * (1 + percentage / 100);
  }

  public currency(): string {
    const priceToDecimal = this._value / 100;
    return priceToDecimal
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
      .replace(/\s/g, '');
  }

  public decimal(): number {
    const valueToDecimal = this._value / 100;
    return parseFloat(valueToDecimal.toFixed(2));
  }

  protected validate(value: number): boolean {
    NumberValidator.isInteger(value, this.label);
    NumberValidator.isPositive(value, this.label);
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

export default Monetary;
