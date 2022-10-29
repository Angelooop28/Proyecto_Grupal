import { Module } from '@nestjs/common';
import { InversionistasController } from './inversionistas.controller';
import { InversionistasService } from './inversionistas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InversionistaSchema } from './schemas/inversionistas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Inversionsita', schema: InversionistaSchema },
    ]),
    InversionistasModule,
  ],
  providers: [InversionistasService],
  controllers: [InversionistasController],
})
export class InversionistasModule {}
