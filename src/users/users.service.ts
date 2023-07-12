import { Injectable } from '@nestjs/common';
import { UserRepository } from './uers.repository';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) {

    }

    findUserById(id: number): UserDto {
        return this.userRepository.findUserById(id)
    }
}
