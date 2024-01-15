export class SendCompletedSaleMailDto {
  readonly email: string;
  readonly fullName: string;
  readonly orderId: string;
  readonly itemName: string;
  readonly imageUrl: string;
  readonly value: number;
  readonly currency: string;
}
