import { Model } from "mongoose";
import { Palabra } from "./interfaces/palabra.interface";
import { CreatepalabraDTO } from "./dto/palabra.dto";
export declare class PalabraService {
    private readonly palabraModel;
    constructor(palabraModel: Model<Palabra>);
    getPalabras(): Promise<Palabra[]>;
    getPalabra(PalabraID: string): Promise<Palabra>;
    createPalabra(createpalabraDTO: CreatepalabraDTO): Promise<Palabra>;
    deletePalabra(PalabraID: string): Promise<Palabra>;
    updatePalabra(PalabraID: string, createpalabraDTO: CreatepalabraDTO): Promise<Palabra>;
}
