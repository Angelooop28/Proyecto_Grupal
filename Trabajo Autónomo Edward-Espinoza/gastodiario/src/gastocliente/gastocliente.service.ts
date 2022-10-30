import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { gastocliente } from './interfaces/gastocliente.interface'
import { createGastoclienteDTO } from './dto/gastocliente.dto'
import { GastoclienteModule } from './gastocliente.module'

@Injectable()
export class GastoclienteService {

    constructor(@InjectModel('gastocliente') private readonly GastoclienteModule: Model<gastocliente>) {}
    
    async getGastocliente(): Promise<gastocliente[]> {
        const gastocliente = await this.GastoclienteModule.find();
        return gastocliente;
    }

    async getgastocliente(gastoclienteID: string): Promise<gastocliente> {
        const gastocliente = await this.GastoclienteModule.findById(gastoclienteID);
        return gastocliente;
    }
    
    async creategastocliente(createGastoclienteDTO: createGastoclienteDTO): Promise<gastocliente> {
        const gastocliente = await new this.GastoclienteModule(createGastoclienteDTO);
        await gastocliente.save();
        return gastocliente;
    }
    
    async deletegastocliente(gastoclienteID: string): Promise<gastocliente> {
        const deletegastocliente = await this.GastoclienteModule.findByIdAndDelete(gastoclienteID);
        return deletegastocliente;
    }
    
    async updategastocliente(gastoclienteID: string, createGastoclienteDTO: createGastoclienteDTO): Promise<gastocliente> {
        const updategastocliente = await this. GastoclienteModule.findByIdAndUpdate(gastoclienteID,
        createGastoclienteDTO,{new : true});
        return updategastocliente;
    }
}

