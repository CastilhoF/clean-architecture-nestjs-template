import { Global, Module } from '@nestjs/common';
import SwaggerOptions from './swagger/swagger.options';

@Global()
@Module({
  imports: [],
  providers: [SwaggerOptions],
  controllers: [],
  exports: [],
})
class DocModule {}

export default DocModule;
