import { greet } from "../activities";

type ExampleArgs = {
    name: string;
}

export async function exampleWorkflow(args: ExampleArgs): Promise<{greeting: string}>{
    const greeting = await greet(args.name);
    return {greeting};
}
