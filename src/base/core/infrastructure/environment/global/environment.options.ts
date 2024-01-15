import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';
import EnvironmentFileEntity from '../../../domain/entity/environment/environment-file.entity';
import EnvironmentEntity from '../../../domain/entity/environment/environment.entity';

class EnvironmentOptions {
  public static getConfig(): ConfigModuleOptions {
    return {
      cache: true,
      envFilePath: this.getEnvironment(),
      expandVariables: true,
      ignoreEnvFile: false,
      ignoreEnvVars: false,
      isGlobal: true,
      load: undefined,
      validationSchema: this.getValidation(),
    };
  }

  public static getValidation(): Joi.ObjectSchema {
    const local = EnvironmentEntity.LOCAL;
    const development = EnvironmentEntity.DEVELOPMENT;
    const testing = EnvironmentEntity.TESTING;
    const production = EnvironmentEntity.PRODUCTION;
    const environments = [local, development, testing, production];

    return Joi.object({
      // APPLICATION
      NODE_ENV: Joi.string().valid(...environments),
      APP_NAME: Joi.string().required(),
      APP_DESCRIPTION: Joi.string().required(),
      APP_HOST: Joi.string().required(),
      APP_PORT: Joi.number().port().required(),
      APP_PREFIX: Joi.string().required(),
      APP_API_KEY: Joi.string().required(),
      APP_DISABLE_JOBS: Joi.boolean().optional().default(false),

      //JSON WEB TOKEN
      JWT_SECRET: Joi.string().required(),
      JWT_EXPIRES: Joi.string().required(),

      // CACHE
      CACHE_HOST: Joi.string().required(),
      CACHE_PORT: Joi.number().port().required(),
      CACHE_PASSWORD: Joi.string().optional(),
      CACHE_DATABASE_LOGICAL: Joi.number().required(),
      CACHE_TTL: Joi.number().required(),

      // DATABASE
      DATABASE_HOST: Joi.string().required(),
      DATABASE_PORT: Joi.number().port().required(),
      DATABASE_USER: Joi.string().required(),
      DATABASE_PASSWORD: Joi.string().required(),
      DATABASE_NAME: Joi.string().required(),
      DATABASE_TYPE: Joi.string().required(),
      DATABASE_URL: Joi.string().required(),
    });
  }

  public static getEnvironment(): string {
    const environment = process.env.NODE_ENV;

    switch (environment) {
      case EnvironmentEntity.LOCAL:
        return EnvironmentFileEntity.DEVELOPMENT_LOCAL;
      case EnvironmentEntity.DEVELOPMENT:
        return EnvironmentFileEntity.DEVELOPMENT_SERVER;
      case EnvironmentEntity.TESTING:
        return EnvironmentFileEntity.TESTING;
      case EnvironmentEntity.PRODUCTION:
        return EnvironmentFileEntity.PRODUCTION;
    }
  }
}

export default EnvironmentOptions;
