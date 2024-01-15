import BaseWrapper from '../_/base.wrapper';
import StringValidator from '../_/validator/string.validator';
import ProductTypeEnum from '../../../../application/enumerators/product-type.enum';
import DomainException from '../../../../application/exception/domain.exception';

class ProductType extends BaseWrapper<string> {
  private constructor(value: string, label: string) {
    super(value, label);
  }

  public static create(value: string, label = 'product type'): ProductType {
    return new ProductType(value, label);
  }

  protected validate(value: string): boolean {
    StringValidator.isValid(value, this.label);
    StringValidator.isMinLength(value, 3, this.label);
    StringValidator.isMaxLength(value, 20, this.label);

    if (!value || value !== ProductTypeEnum[value.toUpperCase()]) {
      const message = `${this.label} must be a valid product type`;
      throw DomainException.invalidData(message, ProductType.name);
    }

    return true;
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this.validate(value);
    this._value = value;
  }
}

export default ProductType;
