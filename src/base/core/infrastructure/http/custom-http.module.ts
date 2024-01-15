import httpProvider from '@/base/_/infrastructure/config/http/provider/http.provider';
import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [HttpModule.registerAsync(httpProvider)],
  providers: [],
  exports: [HttpModule],
})
class CustomHttpModule {}

export default CustomHttpModule;
