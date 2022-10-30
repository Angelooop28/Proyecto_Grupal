import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import {MongooseModule} from '@nestjs/mongoose'
import {clienteSchema} from './schemas/cliente.schema'
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'cliente', schema:clienteSchema}
    ])
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
