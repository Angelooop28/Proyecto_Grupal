import { Module } from '@nestjs/common';
import { ConceptoController } from './concepto.controller';
import { ConceptoService } from './concepto.service';
import {MongooseModule} from '@nestjs/mongoose';
import {conceptoSchema} from './schemas/concepto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'concepto', schema:conceptoSchema}
    ])
  ],
controllers: [ConceptoController],
providers: [ConceptoService]
})
export class ConceptoModule {}
