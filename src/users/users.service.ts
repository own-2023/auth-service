import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) { }


  signUp(user: User) {
    return '';
  }


  async findOneByUsernameAndPassword(username: string, password: string) {
    return await this.usersRepository.findOneByUsernameAndPassword(username, password)
  }

}