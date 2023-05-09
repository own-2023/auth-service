import { proxyActivities } from "@temporalio/workflow";
import { IActivities } from "./activities/IActivities";

type ExampleArgs = {
    name: string;
}

const {greet} = proxyActivities<IActivities>( {scheduleToCloseTimeout: '30 seconds'})


export async function exampleWorkflow(args: ExampleArgs): Promise<{greeting: string}>{
    const greeting = await greet(args.name);
    return {greeting};
}
