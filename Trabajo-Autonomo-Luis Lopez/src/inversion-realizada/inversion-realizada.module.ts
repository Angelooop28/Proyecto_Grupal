/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { InversionRealizadaController } from './inversion-realizada.controller';
import { InversionRealizadaService } from './inversion-realizada.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InversionRealizadaSchema } from './schemas/inversionRealizada.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'InversionesRealizadas', schema: InversionRealizadaSchema}
    ]),
  ],
  controllers: [InversionRealizadaController],
  providers: [InversionRealizadaService],
})
export class InversionRealizadaModule {}
