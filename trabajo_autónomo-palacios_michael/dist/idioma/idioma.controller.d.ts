import { CreateIdiomaDTO } from './dto/idioma.dto';
import { IdiomaService } from "./idioma.service";
export declare class IdiomaController {
    private idiomaservice;
    constructor(idiomaservice: IdiomaService);
    createPost(res: any, createIdiomaDTO: CreateIdiomaDTO): Promise<void>;
    getIdiomas(res: any): Promise<any>;
    getIdioma(res: any, idiomaID: any): Promise<any>;
    deleteproduct(res: any, idiomaID: any): Promise<any>;
    updateproduct(res: any, createIdiomaDTO: CreateIdiomaDTO, idiomaID: any): Promise<any>;
}
