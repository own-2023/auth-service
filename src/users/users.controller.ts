import { Controller, UseGuards, Get, Request, HttpCode, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetUsernameDto } from './dtos/get-username.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get('username')
    async getUsernameById(@Body() getUsernameDto: GetUsernameDto) {
        const username = await this.userService.getUsernameByUserId(getUsernameDto.user_id);
        return { username };
    }

    @Get('user-id/:username')
    async getUserIdByUsername(@Param() params: any) {
        return await this.userService.getUserIdByUsername(params.username);
    }

    @UseGuards(AuthGuard)
    @Get('test')
    async tesy(@Request() req) {

        console.log("test");
        return req.user;
    }
}
