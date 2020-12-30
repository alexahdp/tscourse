import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CollisionExceptionFilter } from './infrastcure/exception-filter';
import { LoggingInterceptor } from './infrastcure/logging-interceptor';
import { loggerMiddleware } from './infrastcure/logging.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.use(loggerMiddleware);
  app.useGlobalFilters(new CollisionExceptionFilter());

  const options = new DocumentBuilder()
    .setTitle('Huntsystem')
    .setDescription('The hyntsystem API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
