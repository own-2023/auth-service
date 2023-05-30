import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import axios from 'axios';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }

    @UseGuards(AuthGuard)
    @Get('test')
    async tesy(@Request() req){
       
        console.log("test");
        return req.user;
    }
}
