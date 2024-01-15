import { IsNumberOptions } from 'class-validator';

class NumberApiValidator {
  public static isInteger(): IsNumberOptions {
    return {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 0,
    };
  }
}

export default NumberApiValidator;
