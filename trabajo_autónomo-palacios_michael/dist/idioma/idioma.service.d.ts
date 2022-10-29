import { Model } from "mongoose";
import { Idioma } from "./interfaces/idioma.interface";
import { CreateIdiomaDTO } from "./dto/idioma.dto";
export declare class IdiomaService {
    private readonly idModel;
    constructor(idModel: Model<Idioma>);
    getIdiomas(): Promise<Idioma[]>;
    getIdioma(idiomaID: string): Promise<Idioma>;
    createIdioma(createIdiomaDTO: CreateIdiomaDTO): Promise<Idioma>;
    deleteIdioma(idiomaID: string): Promise<Idioma>;
    updateIdioma(idiomaID: string, createIdiomaDTO: CreateIdiomaDTO): Promise<Idioma>;
}
