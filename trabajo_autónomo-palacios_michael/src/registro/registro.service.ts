import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel  } from "@nestjs/mongoose";
import { Registro } from "./interfaces/registro.interface";
import { CreatepalabraDTO } from "./dto/registro.dto";


@Injectable()
export class RegistroService {

    constructor(@InjectModel('Registro')  private readonly registroModel : Model<Registro>){}

     async getRegistros():Promise<Registro[]>{
        const registros = await this.registroModel.find();
        return registros;


    }

    async getRegistro(registroID: string): Promise<Registro>{
        const registro = await this.registroModel.findById(registroID);
        return registro;

    }

     async createRegistro(createRegistro:CreatepalabraDTO): Promise<Registro>{
        const registro = new this.registroModel(createRegistro);
        return await registro.save();

    }

    async deleteRegistro(registroID:string): Promise<Registro>{
        const deletedRegistro = await this.registroModel.findByIdAndDelete(registroID);
        return deletedRegistro;

    }

     async updateRegistro(registroID:string,createRegistroDTO:CreatepalabraDTO): Promise<Registro> {
        const updatedRegistro = await this.registroModel.findByIdAndUpdate(registroID,createRegistroDTO,{ new : true});
        return updatedRegistro;

    }



}
