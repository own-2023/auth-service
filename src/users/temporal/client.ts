import { Client } from "@temporalio/client";
import { Worker } from '@temporalio/worker';
import { exampleWorkflow } from "./workflows/example.workflow";
import * as activities from './activities';
export async function run() {

    


    const client = new Client();
    const handle = await client.workflow.start(exampleWorkflow, {
        args: [{ name: 'halil' }],
        taskQueue: 'exampleQueue',
        workflowId: 'example-id'
    });

   

    await client.connection.close();
}
