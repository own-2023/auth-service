import { Worker } from "@temporalio/worker"


export const userWorkerProvider = [
    {
        provide: 'USER_WORKER',
        inject: [],
        useFactory: async () => {
            const worker = await Worker.create({
                workflowsPath: require.resolve('./../users/temporal/workflows'),
                taskQueue: 'exampleQueue',
            })
            worker.run()
            return worker;
        }
    }
]