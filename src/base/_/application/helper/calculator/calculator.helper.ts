class CalculatorHelper {
  public static calculateAge(birthdate: Date): number {
    if (!birthdate) return NaN;

    const now = new Date();
    const monthDiff = now.getMonth() - birthdate.getMonth();
    let age = now.getFullYear() - birthdate.getFullYear();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && now.getDate() < birthdate.getDate())
    ) {
      age = age - 1;
    }

    return age;
  }

  public static calculateTotals(values: number[]): number {
    if (!values || values.length < 1) return 0;

    const total = values.reduce((accumulator, value) => {
      if (!isNaN(value)) {
        return accumulator + value;
      }
      return accumulator;
    }, 0);

    return total;
  }

  public static addStrings(a: string, b: string): string {
    let carry = 0;
    let result = '';

    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');

    for (let i = maxLength - 1; i >= 0; i--) {
      const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }

    if (carry) {
      result = carry + result;
    }

    return result;
  }
}

export default CalculatorHelper;
