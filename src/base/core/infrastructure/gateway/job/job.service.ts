import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import ApplicationEnvironment from '@/base/core/infrastructure/environment/application/application.environment';

@Injectable()
class JobService {
  private readonly logger = new Logger(JobService.name);

  public constructor(
    private schedulerRegistry: SchedulerRegistry,
    private readonly appEnvironment: ApplicationEnvironment,
  ) {}

  public async config() {
    const jobsIsDisable = this.appEnvironment.getDisableJobs();

    if (!jobsIsDisable) return;

    const crons = this.schedulerRegistry.getCronJobs();

    crons.forEach((cron, name) => {
      cron.stop();
      this.schedulerRegistry.deleteCronJob(name);
      this.logger.warn(`Job ${name} is disabled`);
    });
  }
}

export default JobService;
