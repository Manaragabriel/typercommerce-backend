import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, DeleteResult, UpdateResult} from 'typeorm';
import { hash , compare} from 'bcrypt';
import { throwError } from 'rxjs';

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async getUser(param): Promise<User>{
        try{
            return await this.userRepository.findOne(param);
        } catch (error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }
    async getUsers(req): Promise<User[]>{
        try{
            var users = await this.userRepository.find(req.query)
            return users;
        }catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    async createUser(user): Promise<User>{
        try {
            user.password = await hash(user.password, 10)
            user = await this.userRepository.save(user);
            return user;
        } catch (error) {
            console.log(error.code)
            throw new HttpException('Internal', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateUser(userData, params){
        try{
            
          
            
            return await this.userRepository.update(params,userData);
            
        } catch (error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    async deleteUser(id: number): Promise<DeleteResult>{
        try{
            return await this.userRepository.delete({id: id});
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }
}