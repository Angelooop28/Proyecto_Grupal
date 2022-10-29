/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { InversionesRealizadas } from './interfaces/inversionesRealizadas.interface';
import { CreateInversionRealizadaDTO } from './dto/inversionesRealizadas.dto';

@Injectable()
export class InversionesRealizadasService {
    constructor(
        @InjectModel('InversionesRealizadas') private readonly inversionesRealizadasModel: Model<InversionesRealizadas>) {}
    
        async getInversionesRealizadas(): Promise<InversionesRealizadas[]>{
            const inversionesRealizadas = await this.inversionesRealizadasModel.find();
            return inversionesRealizadas;
        }
        async getInversionRealizada(inversionRealizadaID: string): Promise<InversionesRealizadas>{
            const inversionRealizada = await this.inversionesRealizadasModel.findById(inversionRealizadaID);
            return inversionRealizada;
        }
    
        async createInversionRealizada(createInversionRealizadaDTO: CreateInversionRealizadaDTO): Promise<InversionesRealizadas>{
           const inversionRealizada = new this.inversionesRealizadasModel(createInversionRealizadaDTO);
           return await inversionRealizada.save();
        }
    
        async deleteInversionRealizada(inversionRealizadaID: string): Promise<InversionesRealizadas>{
            const deleteinversionRealizada = await this.inversionesRealizadasModel.findByIdAndDelete(inversionRealizadaID);
            return deleteinversionRealizada;
        }
    
        async updateInversionRealizada(inversionRealizadaID: string, createInversionRealizadaDTO: CreateInversionRealizadaDTO): Promise<InversionesRealizadas>{
            const updateinversionRealizada = await this.inversionesRealizadasModel.findByIdAndUpdate(inversionRealizadaID,createInversionRealizadaDTO,
            {new: true});
            return updateinversionRealizada;
        }
}