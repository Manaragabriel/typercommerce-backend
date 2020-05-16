import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../app/Modules/user.module';
import { LocalStrategy } from './local.strategy';
import { User } from 'src/domain/User/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60000s' },
    }),
    
  
  ],
  exports: [AuthService]
  
 
})
export class AuthModule {}
