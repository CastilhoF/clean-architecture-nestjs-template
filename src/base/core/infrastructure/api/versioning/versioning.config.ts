import { VersioningType, VersioningOptions } from '@nestjs/common';

class VersioningConfig {
  public static uri(): VersioningOptions {
    return {
      prefix: 'v',
      type: VersioningType.URI,
    };
  }
}

export default VersioningConfig;
