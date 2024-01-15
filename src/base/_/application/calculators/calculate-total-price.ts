import CartItem from '../../../../cart/domain/entities/cart-item/cart-item.entity';
import OrderItem from '../../../../order/domain/entities/order-item/order-item.entity';
import DomainException from '../exception/domain.exception';
import CalculatorHelper from '../helper/calculator/calculator.helper';

class CalculateTotalPrice {
  public execute(items: CartItem[] | OrderItem[], label: string): number {
    const prices = [];
    const discounts = [];
    const fees = [];

    if (!items || items.length < 1) {
      const message = `${label} is required`;
      throw DomainException.invalidData(message, label);
    }

    items.forEach((item) => {
      prices.push(item.price);
      discounts.push(item.discount);
      fees.push(item.fee);
    });

    const totalPriceAmount = CalculatorHelper.calculateTotals(prices);

    const totalFeeAmount = CalculatorHelper.calculateTotals(fees);

    const totalDiscountAmount = CalculatorHelper.calculateTotals(discounts);

    const totalAmount = totalPriceAmount + totalFeeAmount - totalDiscountAmount;

    return totalAmount;
  }

  public static execute(
    items: CartItem[] | OrderItem[],
    label: string,
  ): number {
    return new CalculateTotalPrice().execute(items, label);
  }
}

export default CalculateTotalPrice;
