import BaseWrapper from '../_/base.wrapper';
import DateValidator from '../_/validator/date.validator';

class DateCustom extends BaseWrapper<Date> {
  private constructor(value: Date, label: string) {
    super(value, label);
  }

  public static create(value: Date, label = 'date'): DateCustom {
    return new DateCustom(value, label);
  }

  public toISOString(): string {
    return this.value.toISOString();
  }

  public toISOStringWithoutTime(): string {
    return this.value.toISOString().split('T')[0];
  }

  public toTimestamp(): number {
    return this.value.getTime();
  }

  public toTimestampInSeconds(): number {
    return Math.floor(this.value.getTime() / 1000);
  }

  protected validate(value: Date): boolean {
    DateValidator.isValid(value, this.label);
    return true;
  }

  public get value(): Date {
    return this._value;
  }

  public set value(value: Date) {
    this.validate(value);
    this._value = value;
  }
}

export default DateCustom;
