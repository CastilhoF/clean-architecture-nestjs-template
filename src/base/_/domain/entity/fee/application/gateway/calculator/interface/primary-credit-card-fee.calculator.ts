import { Inject, Injectable, Logger } from '@nestjs/common';
import CalculatorFeeInterface from '@/base/_/domain/entity/fee/application/gateway/calculator/calculator-fee.interface';
import CryptoQuoteGateway from '@/smart-contracts/application/gateway/quote/crypto-quote.gateway';

@Injectable()
abstract class PrimaryCreditCardFeeCalculator
  implements CalculatorFeeInterface
{
  protected readonly logger: Logger = new Logger(
    PrimaryCreditCardFeeCalculator.name,
  );

  @Inject()
  protected readonly cryptoQuoteService: CryptoQuoteGateway;

  abstract calculate(value: number): Promise<number>;
}

export default PrimaryCreditCardFeeCalculator;
