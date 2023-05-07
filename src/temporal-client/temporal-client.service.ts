import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Client } from '@temporalio/client';

@Injectable()
export class TemporalClientService implements OnApplicationShutdown {

    constructor(@Inject('TEMPORAL_CLIENT') private temporalClient : Client){}

    async close(){
        await this.temporalClient.connection.close(); 
    }

    onApplicationShutdown(signal?: string) {
        Promise.resolve(this.close()).finally(() => console.log('the client has been shutdown'));
    }

}
