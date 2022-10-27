import { Controller,Get,Post,Put,Delete, Res,HttpStatus,Body } from '@nestjs/common';
import {CreateIdiomaDTO} from './dto/idioma.dto'

@Controller('idioma')
export class IdiomaController {

    // ruta para crear productos
    @Post ('/create')
    createPost(@Res()res ,@Body()createIdiomaDTO: CreateIdiomaDTO){
       // console.log(createIdiomaDTO)// con esta linea podemos ver lo que el cliente manda hacia nuesrta consola
        res.status(HttpStatus.OK).json({
            message:'recibido'});
    }

}
