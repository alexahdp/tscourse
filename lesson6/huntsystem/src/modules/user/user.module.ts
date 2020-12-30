import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/domain/user.entity';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
