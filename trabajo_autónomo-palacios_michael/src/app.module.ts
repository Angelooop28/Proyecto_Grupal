import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdiomaModule } from './idioma/idioma.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [IdiomaModule, MongooseModule.forRoot('mongodb+srv://MICHAEL:MICHAEL@cluster0.zchaf5l.mongodb.net/idioma')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
