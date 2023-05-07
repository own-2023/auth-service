import { Client } from "@temporalio/client";
import { exampleWorkflow } from "./workflows";
export async function run() {
    const client = new Client();
    return client;
}
