import { IsNotEmpty, IsString } from "class-validator"

export class SignInDto {


    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    @IsString()
    username: string

}