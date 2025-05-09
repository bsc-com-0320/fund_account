import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  console.log('STARTING')
  console.log(process.env.DATABASE_USERNAME)
  console.log(process.env.DATABASE_PASSWORD)
  console.log(process.env.DATABASE_HOST)
  console.log(process.env.DATABASE_NAME)
  console.log('SREADADADANG')
  const app = await NestFactory.create(AppModule);
  

  // Enable CORS (Important for frontend requests)
  app.enableCors();

  // Load environment variables using ConfigService
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  app.setGlobalPrefix('publictransporttracker')


  await app.listen(port);
  console.log(`✅ Application is running on: http://localhost:${port}/api`);
}

bootstrap();
