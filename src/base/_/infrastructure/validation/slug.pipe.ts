import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
class SlugPipe implements PipeTransform {
  public transform(value: string, metadata: ArgumentMetadata): string {
    if (metadata.data !== 'slug') {
      throw new BadRequestException('slug is required.');
    }
    return value;
  }
}

export default SlugPipe;
