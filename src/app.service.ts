import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { nest: string } {
    return { nest: 'Hello World!' };
  }
}
