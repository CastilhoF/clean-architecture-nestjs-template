import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
class IdPipe implements PipeTransform {
  public transform(value: string, metadata: ArgumentMetadata): string {
    if (metadata.data === 'id' && value.length !== 26) {
      throw new BadRequestException('Id must be a valid ulid.');
    }
    return value;
  }
}

export default IdPipe;
