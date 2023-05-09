import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common/decorators";



@Injectable()
export class UserActivityService {
    constructor(private readonly httpService: HttpService) {
    }

    async greet(name: string): Promise<string> {
        return `Hello, ${name}`;
    }

    async getName(): Promise<string> {
        return
    }

}