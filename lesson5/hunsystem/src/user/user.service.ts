import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  userList: User[] = [];

  getList(): User[] {
    return this.userList;
  }

  create(user: CreateUserDto): User {
    const newUser = new User(user.username, user.email);
    this.userList.push(newUser);
    return newUser;
  }
}
