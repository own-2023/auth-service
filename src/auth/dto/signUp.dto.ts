import { IsNotEmpty, IsString } from "class-validator"

export class SignUpDto {

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    @IsString()
    username: string

    @IsString()
    firstname: string

    @IsString()
    lastname: string

}