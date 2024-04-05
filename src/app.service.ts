import { Injectable } from '@nestjs/common';
import { ClsServiceManager } from 'nestjs-cls';

@Injectable()
export class AppService {
  async getHello() {
    //const cls = ClsServiceManager.getClsService();
    // console.log('isActive AppService', cls.isActive());
    // console.log('someProperty AppService', cls.get('someProperty'));
    return await new Promise((res) => {
      setTimeout(() => {
        res('Hello World!');
      }, 0);
    });
  }
}
