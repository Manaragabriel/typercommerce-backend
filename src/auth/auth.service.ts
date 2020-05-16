import { Injectable } from '@nestjs/common';
import { UserService } from '../domain/User/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUser({email,});
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
