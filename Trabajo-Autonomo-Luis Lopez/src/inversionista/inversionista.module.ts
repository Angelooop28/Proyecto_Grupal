import { Module } from '@nestjs/common';
import { InversionistaController } from './inversionista.controller';
import { InversionistaService } from './inversionista.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InversionistaSchema } from './schemas/inversionista.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Inversionista', schema: InversionistaSchema },
    ]),
  ],
  controllers: [InversionistaController],
  providers: [InversionistaService],
})
export class InversionistaModule {}
