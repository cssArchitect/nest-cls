import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OtherGuard } from './guards/other-guard.guard';
import { ClsGuard } from './guards/cls-guard.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new ClsGuard(), new OtherGuard());
  await app.listen(3000);
}
bootstrap();
