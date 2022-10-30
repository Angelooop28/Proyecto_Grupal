import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoModule } from './concepto/concepto.module';
import { GastoModule } from './gasto/gasto.module';

@Module({
  imports: [ClienteModule, MongooseModule.forRoot('mongodb+srv://edward:1234@cluster0.yby7oao.mongodb.net/base'), ConceptoModule, GastoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
