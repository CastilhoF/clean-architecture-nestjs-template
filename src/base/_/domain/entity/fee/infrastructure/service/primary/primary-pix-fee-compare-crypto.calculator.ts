import CryptoMaticEnum from '@/blockchain/domain/entity/crypto/enum/crypto-matic.enum';
import { Injectable } from '@nestjs/common';
import PrimaryPixFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-pix-fee.calculator';

@Injectable()
class PrimaryPixFeeCompareCryptoCalculator extends PrimaryPixFeeCalculator {
  protected readonly TRANSFER_TAX_FIXED = 2_000;
  protected readonly CONVERSION_TAX_MATIC_FIXED = 1;

  public async calculate(value: number): Promise<number> {
    const maticQuote = await this.cryptoQuoteService.getToUSD(
      CryptoMaticEnum.MATIC,
    );

    const converteTaxMaticToUSD = this.CONVERSION_TAX_MATIC_FIXED * maticQuote;
    const finalTax = converteTaxMaticToUSD + this.TRANSFER_TAX_FIXED;
    this.logger.log(`Pix fee: ${finalTax} and value: ${value}`);

    return finalTax;
  }
}

export default PrimaryPixFeeCompareCryptoCalculator;
