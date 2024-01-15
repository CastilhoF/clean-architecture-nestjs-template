import { Injectable } from '@nestjs/common';
import CryptoMaticEnum from '@/blockchain/domain/entity/crypto/enum/crypto-matic.enum';
import PrimaryCreditCardFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-credit-card-fee.calculator';

@Injectable()
class PrimaryCreditCardFeeCompareCryptoCalculator extends PrimaryCreditCardFeeCalculator {
  private readonly CREDIT_CARD_TAX_PERCENTAGE = 3.5 / 100;
  private readonly CREDIT_CARD_TAX_FIXED = 20;
  private readonly TRANSFER_TAX_FIXED = 2_000;
  private readonly CONVERSION_TAX_MATIC_FIXED = 1;

  public async calculate(value: number): Promise<number> {
    const maticQuote = await this.cryptoQuoteService.getToUSD(
      CryptoMaticEnum.MATIC,
    );

    const converteTaxMaticToUSD = this.CONVERSION_TAX_MATIC_FIXED * maticQuote;

    const creditCardTax =
      value * this.CREDIT_CARD_TAX_PERCENTAGE + this.CREDIT_CARD_TAX_FIXED;

    const finalTax = parseInt(
      (
        creditCardTax +
        converteTaxMaticToUSD +
        this.TRANSFER_TAX_FIXED
      ).toString(),
    );
    this.logger.log(`Credit card fee: ${finalTax} and value: ${value}`);

    return finalTax;
  }
}

export default PrimaryCreditCardFeeCompareCryptoCalculator;
