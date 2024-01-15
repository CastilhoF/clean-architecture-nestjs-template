import CalculatorFeeInterface from '@/base/_/domain/entity/fee/application/gateway/calculator/calculator-fee.interface';
import { Inject, Logger } from '@nestjs/common';
import CryptoQuoteGateway from '@/smart-contracts/application/gateway/quote/crypto-quote.gateway';

abstract class SecondaryCryptoFeeCalculator implements CalculatorFeeInterface {
  protected readonly logger: Logger = new Logger(
    SecondaryCryptoFeeCalculator.name,
  );

  @Inject()
  protected readonly cryptoQuoteService: CryptoQuoteGateway;

  abstract calculate(value: number): Promise<number>;
}

export default SecondaryCryptoFeeCalculator;
