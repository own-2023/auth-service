import { Module } from '@nestjs/common';
import { UsersWorkerController } from './users-worker.controller';
import { UsersWorkerService } from './users-worker.service';
import { userWorkerProvider } from './users-worker.provider';

@Module({
  controllers: [UsersWorkerController],
  providers: [UsersWorkerService, ...userWorkerProvider]
})
export class UsersWorkerModule {}
