import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { User } from 'src/domain/user.entity';
import { AuthGuard } from 'src/infrastcure/auth-guard';
import { CustomPipe } from 'src/infrastcure/custom-pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { SignUpDto } from './dto/signup.dto';
import { UserService } from './user.service';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getList() {
    return this.userService.find();
  }

  @Post()
  @UsePipes(new CustomPipe())
  @ApiResponse({ status: 201, type: User })
  async create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @ApiResponse({ status: 200, type: Boolean, description: 'Test user versions' })
  @Get('testversion/:username')
  async testversion(@Param('username') username: string) {
    return await this.userService.testVestion(username);
  }

  @Post('signup')
  async signUp(@Body() user: SignUpDto) {
    // this.userService.signUp()

  }
}
