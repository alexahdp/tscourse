import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: 200, type: [User] })
  @Get('list')
  list() {
    return this.userService.getList();
  }

  @ApiResponse({ status: 201, type: User })
  @Post('')
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
