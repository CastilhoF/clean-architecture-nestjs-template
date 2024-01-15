import { Inject, Logger } from '@nestjs/common';
import CryptoQuoteGateway from '@/smart-contracts/application/gateway/quote/crypto-quote.gateway';
import CalculatorFeeInterface from '@/base/_/domain/entity/fee/application/gateway/calculator/calculator-fee.interface';

abstract class PrimaryCryptoFeeCalculator implements CalculatorFeeInterface {
  protected readonly logger: Logger = new Logger(
    PrimaryCryptoFeeCalculator.name,
  );

  @Inject()
  protected readonly cryptoQuoteService: CryptoQuoteGateway;

  abstract calculate(value: number): Promise<number>;
}

export default PrimaryCryptoFeeCalculator;
