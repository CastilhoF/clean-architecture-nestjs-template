import CurrencyEnum from '../../../application/enumerators/currency.enum';
import DomainException from '../../../application/exception/domain.exception';
import ExceptionEnum from '../../../application/exception/dto/exception.enum';

type CurrencyConfig = {
  decimals: number;
};

class Price<Currency extends CurrencyEnum = CurrencyEnum> {
  private currencyConfigs: Record<CurrencyEnum, CurrencyConfig> = {
    USD: { decimals: 2 },
    EUR: { decimals: 2 },
    BRL: { decimals: 2 },
    ETH: { decimals: 18 },
    BTC: { decimals: 8 },
    MATIC: { decimals: 18 },
    USDC: { decimals: 6 },
    CRYPTO: { decimals: 18 },
  };
  readonly currency: Currency;
  private readonly _value: number;

  private constructor(value: number, currency: Currency) {
    this.currency = currency;
    this._value = Price.toInt(value, this.decimals);
  }

  static create<Currency extends CurrencyEnum = CurrencyEnum>(
    value: number,
    currency: Currency,
  ): Price<Currency> {
    return new Price(value, currency);
  }

  private get decimals(): number {
    return this.currencyConfigs[this.currency].decimals;
  }

  private static toInt(value: number, decimals: number): number {
    return Math.round(value * 10 ** decimals);
  }

  private static toFloat(value: number, decimals: number): number {
    return value / 10 ** decimals;
  }

  get value(): number {
    return Price.toFloat(this._value, this.decimals);
  }

  sum(...price: Price<Currency>[]): Price<Currency> {
    if (price.some((p) => this.currency !== p.currency)) {
      throw new DomainException(
        'Currency does not match',
        ExceptionEnum.BAD_REQUEST,
        Price.name,
      );
    }
    return new Price(
      Price.toFloat(
        this._value + price.reduce((acc, p) => acc + p._value, 0),
        this.decimals,
      ),
      this.currency,
    );
  }
}

export default Price;
