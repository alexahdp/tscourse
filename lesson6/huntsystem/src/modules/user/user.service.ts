import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { User } from 'src/domain/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { SignUpDto } from './dto/signup.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) {}

  async find(): Promise<User[]> {
    return this.userModel.find();
  }

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);
    await newUser.save();
    return newUser;
  }

  async testVestion(username: string): Promise<boolean> {
    const user1 = await this.userModel.findOne({ username });
    const user2 = await this.userModel.findOne({ username });
    if (!user1 || !user2) {
      return false;
    }
    user1.username = user1.username + '1';
    await user1.save();

    user2.username = user2.username + '2';
    await user2.save();

    return true;
  }

  async signUp(data: SignUpDto) {
    const user = new this.userModel(data);
    user.setPassword(data.password);
    await user.save();
    return user;
  }

  async signIn(email: string, password: string): Promise<string> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException();
    }

    if (!user.validatePassword(password)) {
      throw new BadRequestException();
    }

    // TODO
    return jwt.sign({ _id: user._id }, process.env.SECRET as string, { expiresIn: '120d' });
  }
}
