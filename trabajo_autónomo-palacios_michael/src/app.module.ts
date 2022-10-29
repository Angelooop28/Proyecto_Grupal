import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdiomaModule } from './idioma/idioma.module';
import { MongooseModule } from "@nestjs/mongoose";
import { PalabraModule } from './palabra/palabra.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [IdiomaModule, MongooseModule.forRoot('mongodb+srv://MICHAEL:MICHAEL@cluster0.zchaf5l.mongodb.net/idioma'), PalabraModule, RegistroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
