import { Module } from '@nestjs/common';
import { ConceptoInversionController } from './concepto-inversion.controller';
import { ConceptoInversionService } from './concepto-inversion.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoInversionSchema } from './schemas/conceptoInversion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ConceptoInversion', schema: ConceptoInversionSchema },
    ]),
  ],
  controllers: [ConceptoInversionController],
  providers: [ConceptoInversionService],
})
export class ConceptoInversionModule {}
