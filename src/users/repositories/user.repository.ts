import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './../entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class UserRepository {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneByid(user_id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ user_id });
  }

  async save(user: User) {
    try {
      await this.usersRepository.save([user])
    }
    catch (error) {
      console.log(error)
      if (error instanceof QueryFailedError) {
      throw new BadRequestException({error: 'Username already taken'});
    }
  }
}

async findUserIdByUsername(username: string){
  try{
    const userId = await this.usersRepository.findOne({where:{username}});
    return userId;
  }
  catch(err){
    console.log(err);
  }
}

  findOneByEmailAndPassword(email: string, password: string) {
    return this.usersRepository.findOneBy({ email, password });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

}