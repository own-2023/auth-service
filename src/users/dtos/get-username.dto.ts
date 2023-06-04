import { IsUUID, IsNotEmpty} from "class-validator"


export class GetUsernameDto{

    @IsUUID()
    @IsNotEmpty()
    user_id: string;
    
}