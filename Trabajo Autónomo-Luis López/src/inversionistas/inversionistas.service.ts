/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inversionistas } from './interfaces/inversionistas.interface';
import { CreateInversionistaDTO } from './dto/inversionistas.dto';

@Injectable()
export class InversionistasService {
  constructor(
    @InjectModel('Inversionistas') private readonly InversionistasModel: Model<Inversionistas>) {}

    async getInversionistas(): Promise<Inversionistas[]>{
        const inversionistas = await this.InversionistasModel.find();
        return inversionistas;
    }
    async getInversionista(inversionistaID: string): Promise<Inversionistas>{
        const inversionista = await this.InversionistasModel.findById(inversionistaID);
        return inversionista;
    }

    async createInversionista(createInversionistaDTO: CreateInversionistaDTO): Promise<Inversionistas>{
       const inversionista = new this.InversionistasModel(createInversionistaDTO);
       return await inversionista.save();
    }

    async deleteInversionista(inversionistaID: string): Promise<Inversionistas>{
        const deleteinversionista = await this.InversionistasModel.findByIdAndDelete(inversionistaID);
        return deleteinversionista;
    }

    async updateInversionista(inversionistaID: string, createInversionistaDTO: CreateInversionistaDTO): Promise<Inversionistas>{
        const updateInversionista = await this.InversionistasModel.findByIdAndUpdate(inversionistaID,createInversionistaDTO,
        {new: true});
        return updateInversionista;
    }
}