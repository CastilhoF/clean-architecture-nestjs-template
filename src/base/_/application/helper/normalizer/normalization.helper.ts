class NormalizationHelper {
  public static capitalizeWords(phrase: string): string {
    if (!phrase || typeof phrase !== 'string') {
      return phrase;
    }

    const trimmed = phrase.trim().replace(/\s+/g, ' ');
    const worlds = trimmed.split(' ');
    const capitalize = worlds.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return `${firstLetter}${rest}`;
    });

    return capitalize.join(' ');
  }

  public static capitalizeFullWord(phrase: string): string {
    if (!phrase) return phrase;

    const trimmed = phrase.trim().replace(/\s+/g, ' ');
    const worlds = trimmed.split(' ');
    const capitalize = worlds.map((word) => word.toUpperCase());
    return capitalize.join(' ');
  }

  public static lowerCaseWords(phrase: string): string {
    if (!phrase || typeof phrase !== 'string') {
      return phrase;
    }

    const trimmed = phrase.trim().replace(/\s+/g, ' ');
    const worlds = trimmed.split(' ');
    const lowerCase = worlds.map((word) => word.toLowerCase());
    return lowerCase.join(' ');
  }

  public static upperCaseFulLWord(phrase: string): string {
    if (!phrase || typeof phrase !== 'string') {
      return phrase;
    }

    return phrase.toUpperCase();
  }

  public static trim(phrase: string): string {
    if (!phrase) return phrase;
    return phrase.trim().replace(/\s+/g, ' ');
  }

  public static removeWhiteSpace(phrase: string): string {
    if (!phrase || typeof phrase !== 'string') {
      return phrase;
    }

    return phrase.replace(/\s+/g, '');
  }

  public static removeSpecialCharacters(phrase: string): string {
    if (!phrase || typeof phrase !== 'string') {
      return phrase;
    }

    return phrase.replace(/[^a-zA-Z0-9]/g, '');
  }

  public static removeSpecialCharactersWhitOutHyphen(phrase: string): string {
    if (!phrase) return phrase;
    return phrase.replace(/[^\w\s-]/g, '');
  }

  public static replaceSpacesWithHyphens(phrase: string): string {
    return phrase.replace(/\s+/g, '-');
  }

  public static removeDomainFromEmail(email: string): string {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    }
    return email;
  }

  public static replaceNumbersWithLiterals(phrase: string): string {
    const numberWords = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];

    const replacedPhrase = phrase.replace(/\d+/g, (match) => {
      const digits = match.split('');
      const length = digits.length;

      if (length === 1) {
        return numberWords[parseInt(match, 10)];
      } else if (length === 2) {
        const tens = parseInt(digits[0], 10);
        const units = parseInt(digits[1], 10);

        if (tens === 1) {
          const teenNumber = parseInt(match, 10);
          const teenWords = [
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
          ];

          return teenWords[teenNumber - 10];
        } else {
          const tensWord = [
            '',
            '',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety',
          ][tens];

          const unitsWord = numberWords[units];

          if (units === 0) {
            return tensWord;
          } else {
            return `${tensWord}-${unitsWord}`;
          }
        }
      } else if (length === 3) {
        const hundreds = parseInt(digits[0], 10);
        const tens = parseInt(digits[1], 10);
        const units = parseInt(digits[2], 10);

        const hundredsWord = `${numberWords[hundreds]} hundred`;
        const tensWord = [
          '',
          '',
          'twenty',
          'thirty',
          'forty',
          'fifty',
          'sixty',
          'seventy',
          'eighty',
          'ninety',
        ][tens];
        const unitsWord = numberWords[units];

        if (tens === 0 && units === 0) {
          return hundredsWord;
        } else if (tens === 0) {
          return `${hundredsWord} ${unitsWord}`;
        } else if (tens === 1) {
          const teenNumber = parseInt(`${tens}${units}`, 10);
          const teenWords = [
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
          ];

          return `${hundredsWord} ${teenWords[teenNumber - 10]}`;
        } else if (units === 0) {
          return `${hundredsWord} ${tensWord}`;
        } else {
          return `${hundredsWord} ${tensWord}-${unitsWord}`;
        }
      }

      return match;
    });

    return replacedPhrase;
  }

  public static removeHyphensFromEdges(str: string): string {
    return str.replace(/^-+|-+$/g, '');
  }

  public static slugify(phrase: string): string {
    if (!phrase) return phrase;

    let slug = phrase.toLowerCase();

    if (slug.includes('@')) {
      slug = this.removeDomainFromEmail(slug);
    }

    slug = this.replaceNumbersWithLiterals(slug);

    slug = this.removeSpecialCharactersWhitOutHyphen(slug);

    slug = this.replaceSpacesWithHyphens(slug);

    slug = this.removeHyphensFromEdges(slug);

    slug = this.trim(slug);

    return slug;
  }

  public static symbolize(phrase: string): string {
    if (!phrase) return phrase;

    const slug = this.slugify(phrase);

    const words = slug.split('-');

    const symbol = words.map((word) => word.charAt(0)).join('');

    return symbol.toUpperCase();
  }
}

export default NormalizationHelper;
