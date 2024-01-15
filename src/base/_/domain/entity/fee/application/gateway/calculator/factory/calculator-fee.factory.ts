import { Inject, Injectable } from '@nestjs/common';
import {
  OperationsEnum,
  OperationTypesEnum,
} from '@/base/_/infrastructure/service/fee/fee-calculator';
import { ModuleRef } from '@nestjs/core';
import PrimaryCreditCardFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-credit-card-fee.calculator';
import PrimaryPixFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-pix-fee.calculator';
import PrimaryCryptoFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/primary-crypto-fee.calculator';
import DomainException from '@/base/_/application/exception/domain.exception';
import SecondaryCreditCardFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-credit-card-fee.calculator';
import SecondaryPixFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-pix-fee.calculator';
import SecondaryCryptoFeeCalculator from '@/base/_/domain/entity/fee/application/gateway/calculator/interface/secondary-crypto-fee.calculator';

@Injectable()
class CalculatorFeeFactory {
  constructor(private readonly moduleRef: ModuleRef) {}

  public createCalculator(
    operation: OperationsEnum,
    method: OperationTypesEnum,
  ) {
    switch (operation) {
      case OperationsEnum.PRIMARY_SALE:
        switch (method) {
          case OperationTypesEnum.CREDIT_CARD:
            return this.moduleRef.get(PrimaryCreditCardFeeCalculator);
          case OperationTypesEnum.PIX:
            return this.moduleRef.get(PrimaryPixFeeCalculator);
          case OperationTypesEnum.CRYPTO:
            return this.moduleRef.get(PrimaryCryptoFeeCalculator);
          default:
            throw DomainException.invalidOperation('Invalid operation type');
        }
      case OperationsEnum.SECONDARY_SALE:
        switch (method) {
          case OperationTypesEnum.CREDIT_CARD:
            return this.moduleRef.get(SecondaryCreditCardFeeCalculator);
          case OperationTypesEnum.PIX:
            return this.moduleRef.get(SecondaryPixFeeCalculator);
          case OperationTypesEnum.CRYPTO:
            return this.moduleRef.get(SecondaryCryptoFeeCalculator);
          default:
            throw DomainException.invalidOperation('Invalid operation type');
        }
      default:
        throw DomainException.invalidOperation('Invalid operation type');
    }
  }
}

export default CalculatorFeeFactory;
