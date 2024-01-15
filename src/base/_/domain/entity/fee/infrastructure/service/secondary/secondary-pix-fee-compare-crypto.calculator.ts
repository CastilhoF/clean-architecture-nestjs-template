import { Injectable } from '@nestjs/common';
import CryptoMaticEnum from '@/blockchain/domain/entity/crypto/enum/crypto-matic.enum';
import SecondaryPixFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-pix-fee.calculator';

@Injectable()
class SecondaryPixFeeCompareCryptoCalculator extends SecondaryPixFeeCalculator {
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
export default SecondaryPixFeeCompareCryptoCalculator;
