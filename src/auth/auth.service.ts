import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
        private jwtService: JwtService) { }

    async signIn(email: string, pass: string) {
        const user = await this.userService.findOneByEmailAndPassword(email, pass);
        if (user === null || user?.password != pass) {
            throw new UnauthorizedException();
        }
        const token = await this.createTokenFromEmailPassword(user);
        return { token: token.accesToken, username: user.username };
    }


    async createTokenFromEmailPassword(user: User) {
        const payload = { email: user.email, sub: user.user_id };
        return {
            accesToken: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(user: User) {
        await this.userService.signUp(user);
        return await this.createTokenFromEmailPassword(user);
    }
}
