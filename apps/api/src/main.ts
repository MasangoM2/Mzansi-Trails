import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';

@Controller()
class AppController {
  @Get()
  getHello(): string {
    return 'Hello from NestJS API!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
  console.log(`🚀 API running on http://localhost:3002`);
}

bootstrap();
