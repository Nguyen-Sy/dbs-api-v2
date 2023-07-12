import { UserDto } from "./users.dto";

export class UserRepository {

    findUserById(id: number): UserDto {
        return {
            username: "hello",
            password: "password",
            id: "1",
            updatedAt: new Date(),
            createdAt: new Date()
        }
    }
}