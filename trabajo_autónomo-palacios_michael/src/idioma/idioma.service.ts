import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Idioma  } from "./interfaces/idioma.interface";
import { CreateIdiomaDTO  } from "./dto/idioma.dto";

@Injectable()
export class IdiomaService {

    constructor(@InjectModel('id') private readonly idModel: Model<Idioma>){



        
    }

}
