import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) { }


  async signUp(user: User) {
    await this.usersRepository.save(user);
  }


  async findOneByEmailAndPassword(email: string, password: string) {
    return await this.usersRepository.findOneByEmailAndPassword(email, password)
  }

}