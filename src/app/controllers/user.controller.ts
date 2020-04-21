import { Controller, Get , Post, Put, Delete, Body } from '@nestjs/common';
import { UserService } from '../../domain/User/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getHello(): String{
    return 'teste'
  }

  @Post()
  async createUser(@Body() body: Body) {
      return this.userService.createUser(body);
  }
}
