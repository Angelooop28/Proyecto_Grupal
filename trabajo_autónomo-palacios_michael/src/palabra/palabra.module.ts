import { Module } from '@nestjs/common';
import { PalabraController } from './palabra.controller';
import { PalabraService } from './palabra.service';
import { MongooseModule  } from "@nestjs/mongoose";
import {PalabraSchemas} from './schemas/palabra.schema'

@Module({
  imports:[

    MongooseModule.forFeature([
      { name: 'Palabra', schema: PalabraSchemas}
    ])

  ],
  controllers: [PalabraController],
  providers: [PalabraService]
})
export class PalabraModule {}
