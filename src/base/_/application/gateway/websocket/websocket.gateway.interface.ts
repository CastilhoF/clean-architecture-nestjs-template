import SendPaymentCreditCardPayloadUseCaseOutputDto from '@/order/domain/usecase/send-payment-credit-card-payload/dto/send-payment-credit-card-payload-usecase-output.dto';
import SendPaymentPixPayloadUseCaseOutputDto from '@/order/domain/usecase/send-payment-pix-payload/dto/send-payment-pix-payload-usecase-output.dto';

abstract class WebsocketGatewayInterface {
  public abstract joinRoom(client: WebSocket, roomId: string): Promise<void>;

  public abstract sendPaymentStatusUpdate(
    roomId: string,
    status: string,
  ): Promise<void>;

  public abstract sendPaymentPixReceivedPayload(
    roomId: string,
    payload: SendPaymentPixPayloadUseCaseOutputDto,
  ): Promise<void>;

  public abstract sendPaymentCreditCardReceivedPayload(
    roomId: string,
    payload: SendPaymentCreditCardPayloadUseCaseOutputDto,
  ): Promise<void>;
}

export default WebsocketGatewayInterface;
