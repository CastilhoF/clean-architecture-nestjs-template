import { phone } from 'phone';

class ValidatorHelper {
  static isUrl(url: string): boolean {
    if (!url) return false;

    const protocol = '(https?:\\/\\/)?';
    const subdomain = '(www\\.)?';
    const domain = '([\\w\\-]+\\.)+';
    const tld = '[a-z]{2,}';
    const path = '(\\/.*)?';

    const regex = new RegExp(
      `^${protocol}${subdomain}${domain}${tld}${path}$`,
      'i',
    );

    return !!regex.test(url);
  }

  static isSocialUrl(url: string): boolean {
    if (!url) return false;

    const protocol = '(https?:\\/\\/)?';
    const subdomain = '((www|\\w{2,3})\\.)?';
    const domain =
      '(facebook|twitter|instagram|linkedin|pinterest|snapchat|tiktok|tumblr|reddit|whatsapp|telegram|discord|wechat|weibo|qzone|line|vk)\\.';
    const tld =
      '(com|org|net|co|io|me|gl|fm|to|it|eu|ch|ai|ir|tv|la|be|ly|ws|ca|bz|us|sx|tk|travel|jobs|name|tel|mobi|asia|edu|gov|mil|biz|info|cat|pro|aero|int|post|arpa|[a-z]{2})';
    const path = '(\\/.*)?';
    const regex = new RegExp(`^${protocol}${subdomain}${domain}${tld}${path}$`);

    return !!regex.test(url);
  }

  static isEmail(value: string): boolean {
    if (!value) return false;

    const pattern = new RegExp(
      '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$',
    );

    return !!pattern.test(value);
  }

  static isNumberString(value: string): boolean {
    if (!value) return false;

    const pattern = new RegExp('^[0-9]*$');

    return !!pattern.test(value);
  }

  static isPhoneNumber(value: string, countryCode: string): boolean {
    return phone(value, { country: countryCode }).isValid;
  }

  static isDate(value: Date): boolean {
    return value instanceof Date && !isNaN(value.getTime());
  }

  static isOnlyLettersAndSpace(value: string): boolean {
    if (!value) return false;

    const pattern = new RegExp('^[a-zA-Z ]*$');

    return !!pattern.test(value);
  }
}

export default ValidatorHelper;
