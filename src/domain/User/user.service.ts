import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async createUser(user): Promise<User>{
        return await this.userRepository.save(user);
    }
}