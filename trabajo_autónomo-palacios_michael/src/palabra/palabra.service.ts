import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Palabra } from "./interfaces/palabra.interface";
import { CreatepalabraDTO } from "./dto/palabra.dto";
import { async } from 'rxjs';

@Injectable()
export class PalabraService {

constructor(@InjectModel('Palabra')  private readonly palabraModel :Model<Palabra>){}
    
     async getPalabras(): Promise <Palabra[]>{
        const palabras= await this.palabraModel.find();
        return palabras

    }

    async getPalabra(PalabraID: string): Promise<Palabra>{
       const palabra =  await this.palabraModel.findById(PalabraID);
       return palabra

    }

   async createPalabra(createpalabraDTO:CreatepalabraDTO): Promise<Palabra>{
        const palabra = new this.palabraModel(createpalabraDTO);
        await palabra.save();
        return palabra;
    }

   async deletePalabra(PalabraID:string):Promise<Palabra> {
    const deletedPalabra = await this.palabraModel.findByIdAndDelete(PalabraID);
    return deletedPalabra;
   }

    async updatePalabra(PalabraID: string,createpalabraDTO:CreatepalabraDTO): Promise<Palabra>{
    const updatedPalabra = await this.palabraModel.findByIdAndUpdate(PalabraID,createpalabraDTO,
        {new : true });
    return  updatedPalabra;




   }




}


