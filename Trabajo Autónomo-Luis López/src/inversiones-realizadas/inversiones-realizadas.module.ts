/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { InversionesRealizadasController } from './inversiones-realizadas.controller';
import { InversionesRealizadasService } from './inversiones-realizadas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InversionesRealizadasSchema } from './schemas/inversionesRealizadas.schemas'

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'InversionesRealizadas', schema: InversionesRealizadasSchema}
    ]), InversionesRealizadasModule
  ],
  controllers: [InversionesRealizadasController],
  providers: [InversionesRealizadasService]
})
export class InversionesRealizadasModule {}
