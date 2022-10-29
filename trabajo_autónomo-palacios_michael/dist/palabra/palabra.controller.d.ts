import { CreatepalabraDTO } from "./dto/palabra.dto";
import { PalabraService } from "./palabra.service";
export declare class PalabraController {
    private palabraService;
    constructor(palabraService: PalabraService);
    createPost(res: any, createpalabraDTO: CreatepalabraDTO): Promise<void>;
    getPalabras(res: any): Promise<void>;
    getPalabra(res: any, palabraID: any): Promise<any>;
    deletePalabra(res: any, palabraID: any): Promise<any>;
    updatedPalabra(res: any, createPalabraDTO: CreatepalabraDTO, palabraID: any): Promise<any>;
}
