import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseJsonPipe
  implements PipeTransform<string, Record<string, any>>
{
  transform(value: string, metadata: ArgumentMetadata): Record<string, any> {
    const propertyName = metadata.data;
    try {
      return JSON.parse(value);
    } catch {
      throw new BadRequestException(`${propertyName} contains invalid JSON `);
    }
  }
}
