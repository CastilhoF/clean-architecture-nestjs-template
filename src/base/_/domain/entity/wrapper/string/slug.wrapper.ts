import StringValidator from '../_/validator/string.validator';
import BaseWrapper from '../_/base.wrapper';
import NormalizationHelper from '../../../../application/helper/normalizer/normalization.helper';

class Slug extends BaseWrapper<string> {
  private constructor(slug: string, label: string) {
    super(slug, label);
  }

  public static create(slug: string, label = 'value'): Slug {
    return new Slug(slug, label);
  }

  protected validate(slug: string): boolean {
    StringValidator.isValid(slug, this.label);
    StringValidator.isMinLength(slug, 3, this.label);
    StringValidator.isMaxLength(slug, 50, this.label);
    return true;
  }

  protected postValidate(slug: string): boolean {
    this._value = NormalizationHelper.slugify(slug);
    return true;
  }

  public get value(): string {
    return this._value;
  }

  public set value(slug: string) {
    this.validate(slug);
    this.postValidate(slug);
  }
}

export default Slug;
