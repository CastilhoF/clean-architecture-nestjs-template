import { Inject, Injectable, Logger } from '@nestjs/common';
import CryptoQuoteGateway from '@/smart-contracts/application/gateway/quote/crypto-quote.gateway';

@Injectable()
abstract class PrimaryPixFeeCalculator {
  protected readonly logger: Logger = new Logger(PrimaryPixFeeCalculator.name);

  @Inject()
  protected readonly cryptoQuoteService: CryptoQuoteGateway;

  abstract calculate(value: number): Promise<number>;
}

export default PrimaryPixFeeCalculator;
