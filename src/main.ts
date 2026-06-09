import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cinema API')
    .setDescription('API para gerenciamento de filmes, salas, sessões e ingressos')
    .setVersion('1.0')
    .addTag('filmes')
    .addTag('salas')
    .addTag('sessoes')
    .addTag('ingressos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();