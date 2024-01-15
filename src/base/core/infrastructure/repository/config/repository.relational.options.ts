import { PrismaClient } from '@prisma/client';
import { INestApplication, OnModuleInit } from '@nestjs/common';

class RepositoryRelationalOptions extends PrismaClient implements OnModuleInit {
  public async onModuleInit() {
    await this.$connect();
  }

  public async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });
  }
}

export default RepositoryRelationalOptions;
