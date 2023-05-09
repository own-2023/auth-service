import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { TemporalClientService } from 'src/temporal-client/temporal-client.service';
import { exampleWorkflow } from './temporal/workflows';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService,
        private temporalClientService : TemporalClientService){}

    

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }

    @Get('/initiate-workflow')
    async initiateWorkflow(){
        await this.temporalClientService.initiateWorkflow(exampleWorkflow, {name: 'halil'}, 'queue', 'workflowId');
    }

}
