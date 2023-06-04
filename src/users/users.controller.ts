import { Controller, UseGuards, Get, Request, HttpCode, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import axios from 'axios';
import { GetUsernameDto } from './dtos/get-username.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    

    @UseGuards(AuthGuard)
    @Get('username')
    async getProfile(@Body() getUsernameDto: GetUsernameDto){
        const username = await this.userService.getUsernameByUserId(getUsernameDto.user_id);
        return {username};
    }

    @UseGuards(AuthGuard)
    @Get('test')
    async tesy(@Request() req){
       
        console.log("test");
        return req.user;
    }
}
