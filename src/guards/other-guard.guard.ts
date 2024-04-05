import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import * as assert from 'assert';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class OtherGuard implements CanActivate {
  constructor(private asl: AsyncLocalStorage<unknown>) {}

  async canActivate(context: ExecutionContext) {
    assert(!!this.asl.getStore(), 'Context is not active');

    // comment this line
    this.asl.disable();

    return true;
  }
}
