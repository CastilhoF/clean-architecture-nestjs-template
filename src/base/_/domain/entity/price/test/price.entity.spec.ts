import CurrencyEnum from '../../../../application/enumerators/currency.enum';
import Price from '../price.entity';

describe('Price', () => {
  describe('constructor', () => {
    it('should create a price with the correct value and currency', () => {
      const price = Price.create(10, CurrencyEnum.USD);
      expect(price.value).toEqual(10);
      expect(price.currency).toEqual(CurrencyEnum.USD);
    });

    it('should round the value to the correct number of decimals', () => {
      const price = Price.create(10.1234, CurrencyEnum.USD);
      expect(price.value).toEqual(10.12);
    });
  });

  describe('sum', () => {
    it('should sum two prices with the same currency', () => {
      const price1 = Price.create(10, CurrencyEnum.USD);
      const price2 = Price.create(20, CurrencyEnum.USD);
      const sum = price1.sum(price2);
      expect(sum.value).toEqual(30);
      expect(sum.currency).toEqual(CurrencyEnum.USD);
    });

    it('should sum prices with decimals', () => {
      const price1 = Price.create(10.1234, CurrencyEnum.USD);
      const price2 = Price.create(20.1299, CurrencyEnum.USD);
      const sum = price1.sum(price2);
      expect(sum.value).toEqual(30.25);
      expect(sum.currency).toEqual(CurrencyEnum.USD);
    });

    it('should throw an error if the currencies do not match', () => {
      const price1 = Price.create(10, CurrencyEnum.USD);
      const price2 = Price.create(
        20,
        CurrencyEnum.EUR,
      ) as unknown as Price<CurrencyEnum.USD>;
      expect(() => price1.sum(price2)).toThrowError('Currency does not match');
    });
  });

  describe('create', () => {
    it('should create a price with the correct value and currency', () => {
      const price = Price.create(10, CurrencyEnum.USD);
      expect(price.value).toEqual(10);
      expect(price.currency).toEqual(CurrencyEnum.USD);
    });
  });
});
