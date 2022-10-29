/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options= new DocumentBuilder()
  .setTitle('REGISTRO_INVERSIONES')
  .setDescription('REGISTRO DE INVERSIONISTAS, CONCEPTOS-INVERSIONISTAS, INVERSIONES-REALIZADAS')
  .setVersion('1.0')
  .addTag('REGISTRO_INVERSIONES')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api/docs',app, document)
  await app.listen(5000);
  }
bootstrap();
