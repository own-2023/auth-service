import { Module } from '@nestjs/common';
import { UsersWorkerController } from './users-worker.controller';
import { UsersWorkerService } from './users-worker.service';

@Module({
  controllers: [UsersWorkerController],
  providers: [UsersWorkerService]
})
export class UsersWorkerModule {}
