import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) { }


  async signUp(username: string, password: string, email: string) {
    const user = new User();
    user.username = username;
    user.password = password;
    user.email = email
    await this.usersRepository.save(user);
    return user;
  }

  async getUserIdByUsername(username: string){
    return await this.usersRepository.findUserIdByUsername(username);
  }

  async getUsernameByUserId(userId: string){
    const user = await this.usersRepository.findOneByid(userId);
    return user.username;
  }


  async findOneByEmailAndPassword(email: string, password: string) {
    return await this.usersRepository.findOneByEmailAndPassword(email, password)
  }

}