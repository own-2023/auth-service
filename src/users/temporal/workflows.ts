import { proxyActivities } from "@temporalio/workflow";
import { IActivities } from "./activities/activities";

type ExampleArgs = {
    name: string;
}

const {greet} = proxyActivities<IActivities>({startToCloseTimeout: '3 seconds'})


export async function exampleWorkflow(args: ExampleArgs): Promise<{greeting: string}>{
    const greeting = await greet(args.name);
    return {greeting};
}
