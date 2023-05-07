import { Client } from "@temporalio/client";
import { exampleWorkflow } from "./workflows/example.workflow";
export async function run() {
    const client = new Client();
    const handle = await client.workflow.start(exampleWorkflow, {
        args: [{ name: 'halil' }],
        taskQueue: 'exampleQueue',
        workflowId: 'example-id'
    });
    await client.connection.close();
}
