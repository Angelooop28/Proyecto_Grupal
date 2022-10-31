import { Module } from '@nestjs/common';
import { RegistroController } from './registro.controller';
import { RegistroService } from './registro.service';
import { MongooseModule } from "@nestjs/mongoose";
import { RegistroSchema } from "./schemas/registro.shema";

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Registro',schema:RegistroSchema}
    ])
  ],
  controllers: [RegistroController],
  providers: [RegistroService]
})
export class RegistroModule {}
