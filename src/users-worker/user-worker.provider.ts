import { Worker } from "@temporalio/worker"


export const userWorkerProvider = [
    {
        provide: 'USER_WORKER',
        inject: [],
        userFactory: async () => {
            const worker = await Worker.create({
                workflowsPath: require.resolve('./../users/temporal/activities'),
                taskQueue: 'exampleQueue',
            })
            worker.run()
            return worker;
        }
    }
]