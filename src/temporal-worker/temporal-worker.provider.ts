import { Worker } from "@temporalio/worker"
import { NativeConnection } from "@temporalio/worker";
import { MetadataScanner, DiscoveryService } from "@nestjs/core";
import { InstanceWrapper } from "@nestjs/core/injector/instance-wrapper";
import { UserActivityService } from "src/users/temporal/activities/user-activity.service";


export const temporalWorkerProvider = [
    {
        provide: 'TEMPORAL_WORKER',
        inject: [DiscoveryService, MetadataScanner, UserActivityService],
        useFactory: async (discoveryService: DiscoveryService, metadataScanner: MetadataScanner) => {
            const activitiesMethod: any = {};
            const activities: InstanceWrapper[] = discoveryService.getProviders().filter((wapper: InstanceWrapper) => wapper.name === UserActivityService.name);
            console.log(activities)

            activities.forEach((wrapper: InstanceWrapper) => {
                const { instance, metatype } = wrapper;
                metadataScanner.scanFromPrototype(instance, Object.getPrototypeOf(instance), async (key: string) => {
                    activitiesMethod[key] = instance[key].bind(instance);
                });
            });


            console.log(activitiesMethod);

            const connection: NativeConnection = await NativeConnection.connect();
            const worker = await Worker.create({
                activities: activitiesMethod,
                connection: connection,
                workflowsPath: require.resolve('./../users/temporal/workflows'),
                taskQueue: 'queue',
            })
            worker.run()
            return worker;
        }
    }
]