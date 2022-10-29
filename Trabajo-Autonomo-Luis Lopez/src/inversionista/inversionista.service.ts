/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inversionista } from './interfaces/inversionista.interface';
import { CreateInversionistaDTO } from './dto/inversionista.dto';

@Injectable()
export class InversionistaService {
  constructor(
    @InjectModel('Inversionista') private readonly inversionistaModel: Model<Inversionista>) {}

    async getInversionistas(): Promise<Inversionista[]> {
    const inversionistas = await this.inversionistaModel.find();
        return inversionistas;
    }
    async getInversionista(inversionistaID: string): Promise<Inversionista>{
        const inversionista = await this.inversionistaModel.findById(inversionistaID);
        return inversionista;
    }

    async createInversionista(createInversionistaDTO: CreateInversionistaDTO): Promise<Inversionista>{
       const inversionista = new this.inversionistaModel(createInversionistaDTO);
       return await inversionista.save();
    }

    async deleteInversionista(inversionistaID: string): Promise<Inversionista>{
        const deleteinversionista = await this.inversionistaModel.findByIdAndDelete(inversionistaID);
        return deleteinversionista;
    }

    async updateInversionista(inversionistaID: string, createInversionistaDTO: CreateInversionistaDTO): Promise<Inversionista>{
        const updateinversionista = await this.inversionistaModel.findByIdAndUpdate(inversionistaID,createInversionistaDTO,
        {new: true});
        return updateinversionista;
    }
}
