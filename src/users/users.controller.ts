import { Body, Controller, Param, Post, UseGuards, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }

}
