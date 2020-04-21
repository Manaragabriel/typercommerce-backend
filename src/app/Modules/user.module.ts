import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller'
import { User } from 'src/domain/User/user.entity';
import { UserService } from 'src/domain/User/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [TypeOrmModule.forFeature([User])]
})
export class UserModule{}