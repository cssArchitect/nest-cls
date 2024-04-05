import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { ClsServiceManager } from 'nestjs-cls';

@Injectable()
export class ClsGuard implements CanActivate {
  constructor(private asl: AsyncLocalStorage<any>) {}

  async canActivate(context: ExecutionContext) {
    await setTimeout(() => {
      const a = 1;
      console.log('async operation');
    }, 0);

    this.asl.enterWith({ key: true });

    return true;
  }
}
