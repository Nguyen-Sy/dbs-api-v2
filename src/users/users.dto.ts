import { Expose } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { BaseDTO } from "src/common/base.dto";

export class UserDto extends BaseDTO{
    @IsNotEmpty()
    @Expose()
    username: string;

    @Expose()
    @IsNotEmpty()
    @Length(5, 20)
    password: string;
}