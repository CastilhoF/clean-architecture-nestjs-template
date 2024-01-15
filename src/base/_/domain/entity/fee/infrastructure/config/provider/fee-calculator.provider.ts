import { Provider } from '@nestjs/common';
import PrimaryCreditCardFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-credit-card-fee.calculator';
import PrimaryCreditCardFeeCompareCryptoCalculator from '@/base/_/domain/entity/fee/infrastructure/service/primary/primary-credit-card-fee-compare-crypto.calculator';
import PrimaryPixFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-pix-fee.calculator';
import PrimaryPixFeeCompareCryptoCalculator from '@/base/_/domain/entity/fee/infrastructure/service/primary/primary-pix-fee-compare-crypto.calculator';
import PrimaryCryptoFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-crypto-fee.calculator';
import PrimaryCryptoFeeCompareCryptoCalculator from '@/base/_/domain/entity/fee/infrastructure/service/primary/primary-crypto-fee-compare-crypto.calculator';
import SecondaryCreditCardFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-credit-card-fee.calculator';
import SecondaryPixFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-pix-fee.calculator';
import SecondaryPixFeeCompareCryptoCalculator from '@/base/_/domain/entity/fee/infrastructure/service/secondary/secondary-pix-fee-compare-crypto.calculator';
import SecondaryCryptoFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-crypto-fee.calculator';
import SecondaryCryptoFeeCompareCryptoCalculator from '@/base/_/domain/entity/fee/infrastructure/service/secondary/secondary-crypto-fee-compare-crypto.calculator';

class FeeCalculatorProvider {
  public static primaryCreditCardCalculator(): Provider {
    return {
      provide: PrimaryCreditCardFeeCalculator,
      useClass: PrimaryCreditCardFeeCompareCryptoCalculator,
    };
  }

  public static primaryPixCalculator(): Provider {
    return {
      provide: PrimaryPixFeeCalculator,
      useClass: PrimaryPixFeeCompareCryptoCalculator,
    };
  }

  public static primaryCryptoCalculator(): Provider {
    return {
      provide: PrimaryCryptoFeeCalculator,
      useClass: PrimaryCryptoFeeCompareCryptoCalculator,
    };
  }

  public static secondaryCreditCardCalculator(): Provider {
    return {
      provide: SecondaryCreditCardFeeCalculator,
      useClass: PrimaryCreditCardFeeCompareCryptoCalculator,
    };
  }

  public static secondaryPixCalculator(): Provider {
    return {
      provide: SecondaryPixFeeCalculator,
      useClass: SecondaryPixFeeCompareCryptoCalculator,
    };
  }

  public static secondaryCryptoCalculator(): Provider {
    return {
      provide: SecondaryCryptoFeeCalculator,
      useClass: SecondaryCryptoFeeCompareCryptoCalculator,
    };
  }
}

export default FeeCalculatorProvider;
