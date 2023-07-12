import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from './users.dto';
import { UsersService } from './users.service';
import { plainToClass } from 'class-transformer';

@Controller('users')
export class UserController {

    constructor(private readonly userSevice: UsersService) {

    }

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return UserDto.plainToClass(user)
    }

    @Get(":id")
    findUserById(@Param("id", ParseIntPipe) id: number): UserDto {
        return this.userSevice.findUserById(id)
    }
}