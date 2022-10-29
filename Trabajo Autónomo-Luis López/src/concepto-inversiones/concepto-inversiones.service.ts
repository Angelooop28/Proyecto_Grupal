/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ConceptoInversiones } from './interfaces/conceptoInversiones.interface';
import { CreateConceptoInversionDTO } from './dto/conceptoInversiones.dto';

@Injectable()
export class ConceptoInversionesService {
    constructor(
        @InjectModel('ConceptoInversiones') private readonly conceptoInversionesModel: Model<ConceptoInversiones>) {}
    
        async getConceptoInversiones(): Promise<ConceptoInversiones[]>{
            const conceptoInversiones = await this.conceptoInversionesModel.find();
            return conceptoInversiones;
        }
        async getConceptoInversion(conceptoInversionID: string): Promise<ConceptoInversiones>{
            const conceptoInversion = await this.conceptoInversionesModel.findById(conceptoInversionID);
            return conceptoInversion;
        }
    
        async createConceptoInversion(createConceptoInversionDTO: CreateConceptoInversionDTO): Promise<ConceptoInversiones>{
           const conceptoInversion = new this.conceptoInversionesModel(createConceptoInversionDTO);
           return await conceptoInversion.save();
        }
    
        async deleteConceptoInversion(conceptoInversionID: string): Promise<ConceptoInversiones>{
            const deleteconceptoInversion = await this.conceptoInversionesModel.findByIdAndDelete(conceptoInversionID);
            return deleteconceptoInversion;
        }
    
        async updateConceptoInversion(conceptoInversionID: string, createConceptoInversionDTO: CreateConceptoInversionDTO): Promise<ConceptoInversiones>{
            const updateconceptoInversion = await this.conceptoInversionesModel.findByIdAndUpdate(conceptoInversionID,createConceptoInversionDTO,
            {new: true});
            return updateconceptoInversion;
        }
}
