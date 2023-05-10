import { Injectable } from '@nestjs/common';
import { Worker } from '@temporalio/worker';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
