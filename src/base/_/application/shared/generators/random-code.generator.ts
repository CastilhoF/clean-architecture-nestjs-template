class RandomCode {
  private readonly chars: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  public generate(length: number): string {
    let result = '';

    const charactersLength = this.chars.length;

    for (let i = 0; i < length; i++) {
      result += this.chars.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}

export default RandomCode;
