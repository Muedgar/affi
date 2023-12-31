import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService()
  app.enableCors({
        credentials: true,
        origin: [configService.get('FRONT_END'),configService.get('FRONT_END_TWO'),configService.get('FRONT_END_THREE')]
    });

    await app.listen(configService.get('PORT'));
}
bootstrap();
