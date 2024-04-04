import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import * as assert from 'assert';
import { ClsServiceManager } from 'nestjs-cls';
import { Observable } from 'rxjs';

@Injectable()
export class OtherGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const cls = ClsServiceManager.getClsService();
    // logic
    console.log('isActive', cls.isActive());
    console.log('someProperty', cls.get('someProperty'));

    assert(cls.isActive(), 'Context is not active');
    return true;
  }
}
