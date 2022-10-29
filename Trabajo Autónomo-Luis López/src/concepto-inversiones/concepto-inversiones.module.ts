import { Module } from '@nestjs/common';
import { ConceptoInversionesController } from './concepto-inversiones.controller';
import { ConceptoInversionesService } from './concepto-inversiones.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoInversionistasSchema } from './schemas/conceptoInversion.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ConceptoInversionistas', schema: ConceptoInversionistasSchema },
    ]),
    ConceptoInversionesModule,
  ],
  controllers: [ConceptoInversionesController],
  providers: [ConceptoInversionesService],
})
export class ConceptoInversionesModule {}
