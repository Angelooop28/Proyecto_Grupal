import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoModule } from './concepto/concepto.module';
import { GastoclienteModule } from './gastocliente/gastocliente.module';

@Module({
  imports: [ClienteModule, MongooseModule.forRoot('mongodb+srv://edward:1234@cluster0.yby7oao.mongodb.net/databases'), ConceptoModule, GastoclienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

