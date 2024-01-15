export class SendValidationEmailCodeInputDto {
  readonly fullName: string;
  readonly email: string;
  readonly code: string;

  constructor(fullName: string, email: string, code: string) {
    this.fullName = fullName;
    this.email = email;
    this.code = code;
  }
}
