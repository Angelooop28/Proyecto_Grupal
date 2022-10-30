import { Injectable } from '@nestjs/common'
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import {concepto } from './interfaces/concepto.interface'
import {createConceptoDTO} from './dto/concepto.dto'
import {ConceptoModule } from './concepto.module'

@Injectable()
export class ConceptoService {

constructor(@InjectModel('concepto') private readonly ConceptoModule: Model<concepto>) {}

    async getConcepto(): Promise<concepto[]> {
        const concepto = await this.ConceptoModule.find();
        return concepto;
    }

    async getconcepto(conceptoID: string): Promise<concepto> {
       const concepto = await this.ConceptoModule.findById(conceptoID);
       return concepto;
    }

    async createconcepto(createConceptoDTO: createConceptoDTO): Promise<concepto> {
        const concepto = await new this.ConceptoModule(createConceptoDTO);
        await concepto.save();
        return concepto;
    }

    async deleteconcepto(conceptoID: string): Promise<concepto> {
        const deleteconcepto = await this.ConceptoModule.findByIdAndDelete(conceptoID);
        return deleteconcepto;

    }

    async updateconcepto(conceptoID: string, createConceptoDTO: createConceptoDTO): Promise<concepto> {
        const updateconcepto = await this. ConceptoModule.findByIdAndUpdate(conceptoID,
            createConceptoDTO,{new : true});
            return updateconcepto;
    }
}

