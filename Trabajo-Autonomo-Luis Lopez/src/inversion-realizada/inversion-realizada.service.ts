/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InversionRealizada } from './interfaces/inversionRealizada.interface';
import { CreateInversionRealizadaDTO } from './dto/inversionRealizada.dto';

@Injectable()
export class InversionRealizadaService {
    constructor(
        @InjectModel('InversionesRealizadas') private readonly inversionesRealizadasModel: Model<InversionRealizada>) {}
    
        async getInversionesRealizadas(): Promise<InversionRealizada[]>{
            const inversionesRealizadas = await this.inversionesRealizadasModel.find();
            return inversionesRealizadas;
        }
        async getInversionRealizada(inversionRealizadaID: string): Promise<InversionRealizada>{
            const inversionRealizada = await this.inversionesRealizadasModel.findById(inversionRealizadaID);
            return inversionRealizada;
        }
    
        async createInversionRealizada(createInversionRealizadaDTO: CreateInversionRealizadaDTO): Promise<InversionRealizada>{
           const inversionRealizada = new this.inversionesRealizadasModel(createInversionRealizadaDTO);
           return await inversionRealizada.save();
        }
    
        async deleteInversionRealizada(inversionRealizadaID: string): Promise<InversionRealizada>{
            const deleteinversionRealizada = await this.inversionesRealizadasModel.findByIdAndDelete(inversionRealizadaID);
            return deleteinversionRealizada;
        }
    
        async updateInversionRealizada(inversionRealizadaID: string, createInversionRealizadaDTO: CreateInversionRealizadaDTO): Promise<InversionRealizada>{
            const updateinversionRealizada = await this.inversionesRealizadasModel.findByIdAndUpdate(inversionRealizadaID,createInversionRealizadaDTO,
            {new: true});
            return updateinversionRealizada;
        }
}
