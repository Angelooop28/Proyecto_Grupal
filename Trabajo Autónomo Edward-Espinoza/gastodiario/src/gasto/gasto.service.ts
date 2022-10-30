import { Injectable } from '@nestjs/common';
import { Model} from 'mongoose'
import { InjectModel} from '@nestjs/mongoose'

import { gasto } from './interfaces/gasto.interface'
import { createGastoDTO} from './dto/gasto.dto'
import { GastoModule } from './gasto.module'

@Injectable()
export class GastoService {
    
    constructor(@InjectModel('gasto') private readonly GastoModule: Model<gasto>) {}
    
    async getGasto(): Promise<gasto[]> {
        const gasto = await this.GastoModule.find();
        return gasto;
    }

    async getgasto(gastoID: string): Promise<gasto> {
        const gasto = await this.GastoModule.findById(gastoID);
        return gasto;
    }
    
    async creategasto(createGastoDTO: createGastoDTO): Promise<gasto> {
        const gasto = await new this.GastoModule(createGastoDTO);
        await gasto.save();
        return gasto;
    }
    
    async deletegasto(gastoID: string): Promise<gasto> {
        const deletegasto = await this.GastoModule.findByIdAndDelete(gastoID);
        return deletegasto;
    }
    
    async updategasto(gastoID: string, createGastoDTO: createGastoDTO): Promise<gasto> {
        const updategasto = await this. GastoModule.findByIdAndUpdate(gastoID,
        createGastoDTO,{new : true});
        return updategasto;
    }
}

