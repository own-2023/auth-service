import { Client } from "@temporalio/client";



export const temporalClientProvider = [
    {
        provide: 'TEMPORAL_CLIENT',
        inject: [],
        useFactory: async () => {
            const client = new Client();
            return client;
        }
    }
]