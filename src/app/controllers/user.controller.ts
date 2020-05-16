import { Controller, Get , Post, Put, Delete, Body, Res, Req, Param, UseFilters, UseGuards , Headers} from '@nestjs/common';
import { UserService } from '../../domain/User/user.service';
import { UserValidation } from '../validations/user.validation';
import { User } from '../../domain/User/user.entity';
import { Request,Response} from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard'
@Controller('users')
export class UserController {
  
  
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
   async getUsers(@Req() req): Promise<User[]>{
    console.log(req.user)
    try{
      return await this.userService.getUsers(req);
    } catch (error) {
      return error
    }
  }

  @Post()
  async createUser(@Body() userValido: UserValidation) {
    try {
      var user = this.userService.createUser(userValido);
      return user;
    } catch (error) {
      return error;
    }
    
  }

  @Put(':id')
  async updateUser(@Body() userData,@Param() params ){
    try{
      var user = await this.userService.updateUser(userData,params);
      return user;
    } catch(error) {
      return error
    }
  }

  @Delete(':id')
  async deleteUser(@Param() params, @Res() res){
    try{
        var result = await this.userService.deleteUser(params.id)
        if( result.affected ){
          res.send({"deleted" : true})
        }else{
          res.send({"deleted" : false})
        }
    } catch (error) {
      return error;
    }
  }
}
