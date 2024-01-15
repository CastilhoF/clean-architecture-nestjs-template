import { Global, Module } from '@nestjs/common';
import FeeCalculatorProvider from '@/base/_/domain/entity/fee/infrastructure/config/provider/fee-calculator.provider';

@Global()
@Module({
  imports: [],
  providers: [
    FeeCalculatorProvider.primaryCreditCardCalculator(),
    FeeCalculatorProvider.primaryCryptoCalculator(),
    FeeCalculatorProvider.primaryPixCalculator(),
    FeeCalculatorProvider.secondaryCreditCardCalculator(),
    FeeCalculatorProvider.secondaryCryptoCalculator(),
    FeeCalculatorProvider.secondaryPixCalculator(),
  ],
  exports: [
    FeeCalculatorProvider.primaryCreditCardCalculator(),
    FeeCalculatorProvider.primaryCryptoCalculator(),
    FeeCalculatorProvider.primaryPixCalculator(),
    FeeCalculatorProvider.secondaryCreditCardCalculator(),
    FeeCalculatorProvider.secondaryCryptoCalculator(),
    FeeCalculatorProvider.secondaryPixCalculator(),
  ],
})
class FeeModule {}

export default FeeModule;
