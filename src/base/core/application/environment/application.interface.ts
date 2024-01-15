import Environment from '../../domain/entity/environment/environment.entity';

interface ApplicationInterface {
  getAppName(): string;
  getAppHost(): string;
  getAppPort(): number;
  getNodeEnv(): Environment;
}

export default ApplicationInterface;
