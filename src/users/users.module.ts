import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { HttpModule, HttpService } from '@nestjs/axios/dist';
import { TemporalClientModule } from 'src/temporal-client/temporal-client.module';
import { TemporalClientService } from 'src/temporal-client/temporal-client.service';
import { temporalClientProvider } from 'src/temporal-client/temporal-client.provider';
import { UserActivityService } from './temporal/activities/user-activity.service';

@Module({
    imports:[TypeOrmModule.forFeature([User]), HttpModule, TemporalClientModule],
    providers:[UsersService, UserRepository, TemporalClientService, ...temporalClientProvider, UserActivityService],
    controllers: [UsersController],
    exports: [UsersService, UserActivityService]
})
export class UsersModule {}
