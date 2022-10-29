import { CreatepalabraDTO } from "./dto/registro.dto";
import { RegistroService } from "./registro.service";
export declare class RegistroController {
    private registroService;
    constructor(registroService: RegistroService);
    createPost(res: any, createregistroDTO: CreatepalabraDTO): Promise<void>;
    getRegistros(res: any): Promise<any>;
    getRegistro(res: any, registroID: any): Promise<any>;
    deleteRegistro(res: any, registroID: any): Promise<any>;
    updaeRegistro(res: any, createregistroDTO: CreatepalabraDTO, registroID: any): Promise<any>;
}
