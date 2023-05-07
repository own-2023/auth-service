import { Connection } from "@temporalio/client";
import { WorkflowClient } from "@temporalio/client";


export const clientProvider = [
    {
        provide: 'TEMPORAL_CLIENT',
        inject: [],
        useFactory: async () => {
            const connection = await Connection.connect();
            const client = new WorkflowClient({
                connection
            });
            return client;
        }
    }
]