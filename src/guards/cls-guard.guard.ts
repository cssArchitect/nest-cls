import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ClsServiceManager } from 'nestjs-cls';

@Injectable()
export class ClsGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const cls = ClsServiceManager.getClsService();
    // logic
    await setTimeout(() => {
      const a = 1;
    }, 0);

    cls.enterWith({});
    cls.set('someProperty', true);

    return true;
  }
}
