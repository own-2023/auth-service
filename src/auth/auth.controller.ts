import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
        private userService: UsersService) { }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @Post('sign-up')
    findAll(@Body() params: User) {
        this.userService.signUp(params);
    }


}
