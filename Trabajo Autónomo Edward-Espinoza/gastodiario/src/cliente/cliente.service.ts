import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { cliente } from './interfaces/cliente.interface'
import { createClienteDTO } from './dto/cliente.dto'
import { ClienteModule } from './cliente.module'


@Injectable()
export class ClienteService {

    constructor(@InjectModel('cliente') private readonly ClienteModule: Model<cliente>) {}

    async getCliente(): Promise<cliente[]> {
        const cliente = await this.ClienteModule.find();
        return cliente;
    }

    async getcliente(clienteID: string): Promise<cliente> {
       const cliente = await this.ClienteModule.findById(clienteID);
       return cliente;
    }

    async createcliente(createClienteDTO: createClienteDTO): Promise<cliente> {
        const cliente = await new this.ClienteModule(createClienteDTO);
        await cliente.save();
        return cliente;
    }

    async deletecliente(clienteID: string): Promise<cliente> {
        const deletecliente = await this.ClienteModule.findByIdAndDelete(clienteID);
        return deletecliente;

    }

    async updatecliente(clienteID: string, createClienteDTO: createClienteDTO): Promise<cliente> {
        const updatecliente = await this. ClienteModule.findByIdAndUpdate(clienteID,
            createClienteDTO,{new : true});
            return updatecliente;
    }
}
