import { Injectable } from '@nestjs/common';
import PrimaryCryptoFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-crypto-fee.calculator';

@Injectable()
class PrimaryCryptoFeeCompareCryptoCalculator extends PrimaryCryptoFeeCalculator {
  public async calculate(value: number): Promise<number> {
    this.logger.log(`Crypto fee: 0 and value: ${value}`);
    return 0;
  }
}

export default PrimaryCryptoFeeCompareCryptoCalculator;
