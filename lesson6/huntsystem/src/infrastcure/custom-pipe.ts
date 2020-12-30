import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  constructor() {}

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('run pipe');
    // const { error } = this.schema.validate(value);
    // if (error) {
    //   throw new BadRequestException('Validation failed');
    // }
    return value;
  }
}