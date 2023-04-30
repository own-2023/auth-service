import { Controller, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private service: UsersService){}

    @Get()
    findAll(@Param() params){
        return this.service.findAll();
    }

}
