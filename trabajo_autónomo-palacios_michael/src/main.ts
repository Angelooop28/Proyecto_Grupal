import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options= new DocumentBuilder()
  .setTitle('REGISTRO_IDIOMA')
  .setDescription('REGISTRO DE  IDIOMA , PALABRA , REGISTRO')
  .setVersion('1.0')
  .addTag('REGISTRO_IDIOMA')
  .build();

const document = SwaggerModule.createDocument(app,options);
SwaggerModule.setup('api/docs',app,document)

  await app.listen(3000);
}
bootstrap();
