import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';
import { UserRepository } from './repositories/user.repository';


@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) { }


}