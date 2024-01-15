import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';
import DomainException from '../../../../application/exception/domain.exception';

class TimeCustom extends BaseWrapper<string> {
  private constructor(value: string, label: string) {
    super(value, label);
    this.postValidate(value);
  }

  public static create(value: string, label = 'time'): TimeCustom {
    return new TimeCustom(value, label);
  }

  public isBefore(time: TimeCustom): boolean {
    const [hour, minute] = this.value.split(':');
    const [hourToCompare, minuteToCompare] = time.value.split(':');

    if (hour < hourToCompare) {
      return true;
    }

    return hour === hourToCompare && minute < minuteToCompare;
  }

  public isAfter(time: TimeCustom): boolean {
    const [hour, minute] = this.value.split(':');
    const [hourToCompare, minuteToCompare] = time.value.split(':');

    if (hour > hourToCompare) {
      return true;
    }

    return hour === hourToCompare && minute > minuteToCompare;
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);
    return true;
  }

  protected postValidate(value: string): boolean {
    const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if (!regex.test(value)) {
      DomainException.invalidData(
        `invalid ${this.label} format. Valid format: 00:00 - 23:59`,
      );
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

export default TimeCustom;
