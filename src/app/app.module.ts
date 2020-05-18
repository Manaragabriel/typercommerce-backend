import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './Modules/user.module'
import { AuthModule } from '../auth/auth.module';
import { CategoryModule } from './Modules/category.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UserModule,AuthModule, CategoryModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
 