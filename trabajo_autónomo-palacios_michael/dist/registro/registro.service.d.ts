import { Model } from "mongoose";
import { Registro } from "./interfaces/registro.interface";
import { CreatepalabraDTO } from "./dto/registro.dto";
export declare class RegistroService {
    private readonly registroModel;
    constructor(registroModel: Model<Registro>);
    getRegistros(): Promise<Registro[]>;
    getRegistro(registroID: string): Promise<Registro>;
    createRegistro(createRegistro: CreatepalabraDTO): Promise<Registro>;
    deleteRegistro(registroID: string): Promise<Registro>;
    updateRegistro(registroID: string, createRegistroDTO: CreatepalabraDTO): Promise<Registro>;
}
