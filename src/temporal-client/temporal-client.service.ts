import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Client } from '@temporalio/client';
import { Workflow } from '@temporalio/client';

@Injectable()
export class TemporalClientService implements OnApplicationShutdown {

    constructor(@Inject('TEMPORAL_CLIENT') private temporalClient: Client) { }

    async close() {
        await this.temporalClient.connection.close();
    }

    onApplicationShutdown(signal?: string) {
        Promise.resolve(this.close()).finally(() => console.log('the client has been shutdown'));
    }

    async initiateWorkflow(workflow: Workflow, args, taskQueue: string, workflowId: string, ) {
        await this.temporalClient.workflow.start(workflow,{
            args: [args],
            taskQueue: taskQueue,
            workflowId: workflowId,
        })
    }
}
