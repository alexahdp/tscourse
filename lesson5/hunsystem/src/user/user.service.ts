import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async getList(): Promise<User[]> {
    return await User.find();
  }

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new User(user.username, user.email);
    return await newUser.save();
  }
}
