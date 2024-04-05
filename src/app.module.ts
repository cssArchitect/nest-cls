import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsyncLocalStorage } from 'async_hooks';

@Module({
  providers: [
    {
      provide: AsyncLocalStorage,
      useValue: new AsyncLocalStorage(),
    },
  ],
  exports: [AsyncLocalStorage],
})
export class AlsModule {}

@Module({
  imports: [AlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
