import { Controller, HttpCode, HttpStatus, Post, Body, Header } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signIn.dto';
import { User } from 'src/users/entities/user.entity';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto.email, signInDto.password);
    }

    @Post('sign-up')
    @HttpCode(204)
    async signUp(@Body() body: User) {
        const token = await this.authService.signUp(body);
        return {username: body.username, token} ;
    }
}
