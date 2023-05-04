import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signIn.dto';
import { User } from 'src/users/entities/user.entity';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto.username, signInDto.password);
    }

    @Post('sign-up')
    async findAll(@Body() body: User) {
        await this.authService.signUp(body);
    }
}
