import CryptoMaticEnum from '@/blockchain/domain/entity/crypto/enum/crypto-matic.enum';
import SecondaryCreditCardFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-credit-card-fee.calculator';

class SecondaryCreditCardFeeCompareCryptoCalculator extends SecondaryCreditCardFeeCalculator {
  protected readonly CREDIT_CARD_TAX_PERCENTAGE = 3.5 / 100;
  protected readonly CREDIT_CARD_TAX_FIXED = 20;
  protected readonly TRANSFER_TAX_FIXED = 2_000;
  protected readonly CONVERSION_TAX_MATIC_FIXED = 1_000;

  public async calculate(value: number): Promise<number> {
    const maticQuote = await this.cryptoQuoteService.getToUSD(
      CryptoMaticEnum.MATIC,
    );

    const converteTaxMaticToUSD = this.CONVERSION_TAX_MATIC_FIXED * maticQuote;
    const creditCardTax =
      value * this.CREDIT_CARD_TAX_PERCENTAGE + this.CREDIT_CARD_TAX_FIXED;

    const finalTax =
      creditCardTax + converteTaxMaticToUSD + this.TRANSFER_TAX_FIXED;
    this.logger.log(`Credit card fee: ${finalTax} and value: ${value}`);

    return finalTax;
  }
}

export default SecondaryCreditCardFeeCompareCryptoCalculator;
