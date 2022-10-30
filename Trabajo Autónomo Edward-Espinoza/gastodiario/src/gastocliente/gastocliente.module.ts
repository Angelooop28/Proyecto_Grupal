import { Module } from '@nestjs/common';
import { GastoclienteController } from './gastocliente.controller';
import { GastoclienteService } from './gastocliente.service';
import { MongooseModule } from '@nestjs/mongoose'
import {gastoclienteSchema } from './schemas/gastocliente.schema'


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'gastocliente', schema:gastoclienteSchema}
    ])
  ],
  controllers: [GastoclienteController],
  providers: [GastoclienteService]
})
export class GastoclienteModule {}
