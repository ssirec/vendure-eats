import { bootstrapWorker } from '@vendure/core';
import { config } from './vendure-config';

// tslint:disable-next-line:no-console
bootstrapWorker(config)
  .then(async (worker) => {
    await worker.startJobQueue();
    await worker.startHealthCheckServer({
      port: 3123,
    });
  })
  .catch((err: any) => {
    console.log(err);
    process.exit(1);
  });
