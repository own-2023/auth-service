import { Module } from '@nestjs/common';
import { TemporalWorkerService } from './temporal-worker.service';
import { temporalWorkerProvider } from './temporal-worker.provider';
import { DiscoveryModule, MetadataScanner } from '@nestjs/core';
import { UserActivityService } from 'src/users/temporal/activities/user-activity.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [DiscoveryModule, HttpModule],
  providers: [TemporalWorkerService, ...temporalWorkerProvider, MetadataScanner, UserActivityService]
})
export class TemporalWorkerModule { }
