import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options= new DocumentBuilder()
  .setTitle(' GASTOS_DIARIOS')
  .setDescription('CLIENTES, CONCEPTOS, GASTOS DEL CLIENTE')
  .setVersion('1.0')
  .addTag('GASTOS_DIARIOS')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api/docs',app, document)
  await app.listen(process.env.PORT || 5000);
}
bootstrap();

