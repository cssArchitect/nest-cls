import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OtherGuard } from './guards/other-guard.guard';
import { ClsGuard } from './guards/cls-guard.guard';
import { AsyncLocalStorage } from 'async_hooks';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(
    new ClsGuard(app.get(AsyncLocalStorage)),
    new OtherGuard(app.get(AsyncLocalStorage)),
  );
  await app.listen(3000);
}
bootstrap();
