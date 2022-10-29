import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InversionistaModule } from './inversionista/inversionista.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoInversionModule } from './concepto-inversion/concepto-inversion.module';
import { InversionRealizadaModule } from './inversion-realizada/inversion-realizada.module';

@Module({
  imports: [
    InversionistaModule,
    MongooseModule.forRoot(
      'mongodb+srv://luislopez1201:12345@cluster0.byziivv.mongodb.net/DataBase',
    ),
    ConceptoInversionModule,
    InversionRealizadaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
