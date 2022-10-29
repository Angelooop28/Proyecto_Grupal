/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConceptoInversion } from './interfaces/conceptoInversion.interface';
import { CreateConceptoInversionDTO } from './dto/conceptoInversion.dto';

@Injectable()
export class ConceptoInversionService {
    constructor(
        @InjectModel('ConceptoInversion') private readonly conceptoInversionModel: Model<ConceptoInversion>) {}
    
        async getConceptoInversiones(): Promise<ConceptoInversion[]>{
            const conceptoInversiones = await this.conceptoInversionModel.find();
            return conceptoInversiones;
        }
        async getConceptoInversion(conceptoInversionID: string): Promise<ConceptoInversion>{
            const conceptoInversion = await this.conceptoInversionModel.findById(conceptoInversionID);
            return conceptoInversion;
        }
    
        async createConceptoInversion(createConceptoInversionDTO: CreateConceptoInversionDTO): Promise<ConceptoInversion>{
           const conceptoInversion = new this.conceptoInversionModel(createConceptoInversionDTO);
           return await conceptoInversion.save();
        }
    
        async deleteConceptoInversion(conceptoInversionID: string): Promise<ConceptoInversion>{
            const deleteconceptoInversion = await this.conceptoInversionModel.findByIdAndDelete(conceptoInversionID);
            return deleteconceptoInversion;
        }

        async updateConceptoInversion(conceptoInversionID: string, createConceptoInversionDTO: CreateConceptoInversionDTO): Promise<ConceptoInversion>{
            const updateconceptoInversion = await this.conceptoInversionModel.findByIdAndUpdate(conceptoInversionID,createConceptoInversionDTO,
            {new: true});
            return updateconceptoInversion;
        }
}
