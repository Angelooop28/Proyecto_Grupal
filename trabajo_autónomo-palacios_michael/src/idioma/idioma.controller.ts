import { Controller,Get,Post,Put,Delete, Res,HttpStatus,Body, Param, NotFoundException,Query } from '@nestjs/common';
import { create } from 'domain';
import { query } from 'express';
import {CreateIdiomaDTO} from './dto/idioma.dto'
import { IdiomaService } from "./idioma.service";

@Controller('idioma')
export class IdiomaController {

    constructor(private idiomaservice:IdiomaService){}
    // ruta para crear productos
    @Post ('/create')
   async createPost(@Res()res ,@Body()createIdiomaDTO: CreateIdiomaDTO){
         const idioma =await this.idiomaservice.createIdioma(createIdiomaDTO)
       // console.log(createIdiomaDTO)// con esta linea podemos ver lo que el cliente manda hacia nuesrta consola
        res.status(HttpStatus.OK).json({
            message:'Producto Creado',
            idioma:idioma,
        });
    }

    //muestra todos los datos
    // Esto se mostrara cuando tengamos la direccion "/"
    @Get('/')
     async getIdiomas(@Res()res){
       const idiomas = await this.idiomaservice.getIdiomas();
        return res.status(HttpStatus.OK).json({
        idiomas:idiomas
       })
    }

    //busqueda individual
    @Get('/:idiomaID')
    async getIdioma(@Res()res,@Param('idiomaID')idiomaID){
      const idioma= await  this.idiomaservice.getIdioma(idiomaID);
      if(!idioma)throw new NotFoundException('No hay, no existe!!!')
      return res.status(HttpStatus.OK).json(idioma);
    }

    @Delete('/delete')
    async deleteproduct(@Res() res,@Query('idiomaID')idiomaID ){
        const productDelete = await this.idiomaservice.deleteIdioma(idiomaID);
        if(!productDelete) throw new NotFoundException('Producto no existe')
        return res.status(HttpStatus.OK).json({message:'Producto eliminado',
    productDelete
    });
    }

    @Put('/update')
   async updateproduct(@Res() res,@Body()createIdiomaDTO:CreateIdiomaDTO,@Query('idiomaID')
    idiomaID){
      const updateIdioma =  await this.idiomaservice.updateIdioma(idiomaID,createIdiomaDTO);
      if(!updateIdioma) throw new NotFoundException('Producto no existe');
      return res.status(HttpStatus.OK).json({message:'Producto actualizado',});
      updateIdioma


    }

}
