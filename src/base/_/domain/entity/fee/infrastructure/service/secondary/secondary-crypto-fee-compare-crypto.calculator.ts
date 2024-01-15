import SecondaryCryptoFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-crypto-fee.calculator';

class SecondaryCryptoFeeCompareCryptoCalculator extends SecondaryCryptoFeeCalculator {
  public async calculate(value: number): Promise<number> {
    this.logger.log(`Crypto fee: 0 and value: ${value}`);
    return 0;
  }
}

export default SecondaryCryptoFeeCompareCryptoCalculator;
