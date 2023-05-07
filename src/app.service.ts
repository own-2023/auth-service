import { Injectable } from '@nestjs/common';
import { Worker } from '@temporalio/worker';
import * as activities from './users/temporal/activities'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  async startWorker() {
    const worker = await Worker.create({
      taskQueue: 'exampleQueue',
      workflowsPath: require.resolve('./workflows'),
      activities
    })

    await worker.run();
  }
}
