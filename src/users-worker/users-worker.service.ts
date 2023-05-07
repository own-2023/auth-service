import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Worker } from '@temporalio/worker';

@Injectable()
export class UsersWorkerService implements OnApplicationShutdown {

    constructor(@Inject('USER_WORKER') private userWorker: Worker) { }


    async close() {
        if (this.userWorker.getState() != 'DRAINED' && this.userWorker.getState() != 'DRAINING'
            && this.userWorker.getState() != 'FAILED' && this.userWorker.getState() != 'STOPPING'
            && this.userWorker.getState() != 'STOPPED') {
            await this.userWorker.shutdown();
        }
    }

    onApplicationShutdown(signal?: string) {
        Promise.resolve(this.close()).finally(() => console.log('the worker has been shutdown'));
    }

}
