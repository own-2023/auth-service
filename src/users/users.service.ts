import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { DataSource } from 'typeorm';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneByid(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  signUp(user: User) {
    this.usersRepository.save([user]);
  }


  findOneByUsernameAndPassword(username: string, password: string) {
    return this.usersRepository.findOneBy({ username, password });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createMany(users: User[]) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(users[0]);
      await queryRunner.manager.save(users[1]);
      await queryRunner.commitTransaction();
    }
    catch (err) {

      await queryRunner.rollbackTransaction();
    }

    await queryRunner.release();
  }
}