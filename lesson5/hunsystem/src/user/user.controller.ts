import { Body, Controller, Get, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
import { EntityConflictExceptionFilter } from '../infrastructure/entity-conflict.exception-filter';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: 200, type: [User] })
  @Get('list')
  async list() {
    return await this.userService.getList();
  }

  @ApiResponse({ status: 201, type: User })
  @UseFilters(new EntityConflictExceptionFilter())
  @Post('')
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }
}
