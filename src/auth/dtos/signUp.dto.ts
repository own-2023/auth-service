import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class SignUpDto {

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    @IsString()
    username: string

    @IsEmail()
    email: string
}