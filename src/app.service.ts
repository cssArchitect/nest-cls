import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    return await new Promise((res) => {
      setTimeout(() => {
        res('Hello World!');
      }, 0);
    });
  }
}
