import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository{

    constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ){}


    findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      findOneByid(user_id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ user_id });
      }
    
      async signUp(user: User) {
        await this.usersRepository.save([user]);
      }
    
    
      findOneByUsernameAndPassword(username: string, password: string) {
        return this.usersRepository.findOneBy({ username, password });
      }
    
      async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
      }


}