import OrderItem from '../../../../order/domain/entities/order-item/order-item.entity';
import DomainException from '../exception/domain.exception';
import CalculatorHelper from '../helper/calculator/calculator.helper';

class CalculateTotalFee {
  public execute(items: OrderItem[], label: string): number {
    const values = [];

    if (!items || items.length < 1) {
      const message = `${label} is required`;
      throw DomainException.invalidData(message, label);
    }

    items.forEach((item) => {
      values.push(item.fee);
    });

    const totalAmount = CalculatorHelper.calculateTotals(values);

    return totalAmount;
  }

  public static execute(items: OrderItem[], label: string): number {
    return new CalculateTotalFee().execute(items, label);
  }
}

export default CalculateTotalFee;
