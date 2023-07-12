import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { UserRepository } from './uers.repository';

@Module({
  controllers: [UserController],
  providers: [UsersService, UserRepository],
})
export class UsersModule { }
