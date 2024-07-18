import { HttpExceptionFilter } from '@app/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ConfigModule, {
    cors: true,
    rawBody: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('nestjs-typeorm')
    .setDescription('This is Document of nestjs-typeorm')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('APP_PORT'));
}
bootstrap();
