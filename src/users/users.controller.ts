import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { run } from './temporal/client';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }

    @Get('/initiate-workflow')
    async startWorkflow(){
        await run();
    }

}
