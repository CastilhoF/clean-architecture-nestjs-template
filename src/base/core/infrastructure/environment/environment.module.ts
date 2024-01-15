import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ApplicationEnvironment from './application/application.environment';
import AuthenticationEnvironment from './authentication/authentication.environment';
import environmentOptions from './global/environment.options';

@Global()
@Module({
  imports: [ConfigModule.forRoot(environmentOptions.getConfig())],
  providers: [ApplicationEnvironment, AuthenticationEnvironment],
  controllers: [],
  exports: [ApplicationEnvironment, AuthenticationEnvironment],
})
class EnvironmentModule {}

export default EnvironmentModule;
