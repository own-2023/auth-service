import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
        private jwtService: JwtService) { }

    async signIn(username: string, pass: string) {
        const user = await this.userService.findOneByUsernameAndPassword(username, pass);
        if (user?.password == pass) {
            throw new UnauthorizedException();
        }

        const payload = {username: user.username, sub: user.id};

        return {
            accesToken: await this.jwtService.signAsync(payload),
        };
    }
}
