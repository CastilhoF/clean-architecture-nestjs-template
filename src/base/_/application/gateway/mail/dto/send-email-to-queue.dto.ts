export class SendEmailToQueueDto {
  readonly orderId: string;
  readonly fullName: string;
  readonly email: string;
  readonly value: number;
  readonly currency: string;
}
