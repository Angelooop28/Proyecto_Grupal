import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Idioma } from "./interfaces/idioma.interface";
import { CreateIdiomaDTO  } from "./dto/idioma.dto";

@Injectable()
export class IdiomaService {

    constructor(@InjectModel('id') private readonly idModel: Model<Idioma>){}

         async getIdiomas(): Promise<Idioma[]> {
             const idiomas = await this.idModel.find();
            return idiomas;
        }

         async getIdioma(idiomaID: string): Promise<Idioma>{
            const idioma=  await this.idModel.findById(idiomaID);
                  return idioma;  }
        

       async createIdioma(createIdiomaDTO:CreateIdiomaDTO): Promise<Idioma>{
        //creando idioma que vamos a guardar
             const idioma = new this.idModel(createIdiomaDTO);
             // aqui recien lo guardamos
             return await idioma.save();
              
        }

        async deleteIdioma(idiomaID: string): Promise<Idioma>{
           return await  this.idModel.findByIdAndDelete(idiomaID)
        }


        //editar
       async updateIdioma(idiomaID:string, createIdiomaDTO:CreateIdiomaDTO):Promise<Idioma>{
             return await this.idModel.findByIdAndUpdate(idiomaID,createIdiomaDTO, {new:true})


        }


    }
