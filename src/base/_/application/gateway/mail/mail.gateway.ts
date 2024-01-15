import { SendCompletedSaleMailDto } from './dto/send-complete-sale-mail.dto';
import { SendEmailToQueueDto } from './dto/send-email-to-queue.dto';
import { SendValidationEmailCodeInputDto } from './dto/send-validation-email-code-input.dto';
import { SendWelcomeEmailInputDto } from './dto/send-welcome-email-input.dto';
import { SendCollectionApprovedInputDto } from './dto/send-collection-approved-input.dto';
import { SendCollectionRejectedInputDto } from './dto/send-collection-rejected-input.dto';
import { SendCollectionUnderAnalysisInputDto } from './dto/send-collection-under-analysis-input.dto';
import { SendCollectionPublishedInputDto } from './dto/send-collection-published-input.dto';

abstract class MailGateway {
  abstract sendEmailProcessorReceived(
    input: SendEmailToQueueDto,
  ): Promise<void>;

  abstract sendEmailProcessorApproved(
    input: SendEmailToQueueDto,
  ): Promise<void>;

  abstract sendEmailProcessorDenied(input: SendEmailToQueueDto): Promise<void>;

  abstract sendEmailProcessorCompleted(
    input: SendCompletedSaleMailDto,
  ): Promise<void>;

  abstract sendValidationEmailCodeProcessor(
    input: SendValidationEmailCodeInputDto,
  ): Promise<void>;

  abstract sendWelcomeEmailProcessor(
    input: SendWelcomeEmailInputDto,
  ): Promise<void>;

  abstract sendCollectionApprovedProcessor(
    input: SendCollectionApprovedInputDto,
  ): Promise<void>;

  abstract sendCollectionRejectedProcessor(
    input: SendCollectionRejectedInputDto,
  ): Promise<void>;

  abstract sendCollectionUnderAnalysisProcessor(
    input: SendCollectionUnderAnalysisInputDto,
  ): Promise<void>;

  abstract sendCollectionPublishedProcessor(
    input: SendCollectionPublishedInputDto,
  ): Promise<void>;
}

export default MailGateway;
