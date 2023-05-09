import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { HttpModule, HttpService } from '@nestjs/axios/dist';
@Module({
    imports:[TypeOrmModule.forFeature([User]), HttpModule],
    providers:[UsersService, UserRepository],
    controllers: [UsersController],
    exports: [UsersService]
})
export class UsersModule {}
