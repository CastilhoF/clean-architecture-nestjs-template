export class SendWelcomeEmailInputDto {
  readonly fullName: string;
  readonly email: string;

  constructor(fullName: string, email: string) {
    this.fullName = fullName;
    this.email = email;
  }
}
