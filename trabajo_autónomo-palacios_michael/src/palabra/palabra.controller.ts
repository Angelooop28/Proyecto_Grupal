import { Controller,Get,Post,Put,Delete, Res,HttpStatus,Body, Param, NotFoundException,Query } from '@nestjs/common';
import { query } from 'express';
import { CreatepalabraDTO  } from "./dto/palabra.dto";
import { PalabraService  } from "./palabra.service";

@Controller('palabra')
export class PalabraController {

constructor( private palabraService:PalabraService){}
@Post('/create')

// DTO = data transfer objetc
 async createPost(@Res()res,@Body()createpalabraDTO:CreatepalabraDTO ){
    const palabra = await this.palabraService.createPalabra(createpalabraDTO);
    //console.log(createpalabraDTO);
res.status(HttpStatus.OK).json({
    message:'recibida palabra',
    palabra:palabra
})
}
@Get('/')
 async getPalabras(@Res()res){
    const palabras = await this.palabraService.getPalabras();
    res.status(HttpStatus.OK).json({
        palabras:palabras
    })
 }

 @Get('/:palabraID')
 async getPalabra(@Res()res,@Param('palabraID') palabraID){

    const palabra = await this.palabraService.getPalabra(palabraID);
    if(!palabra) throw new NotFoundException('Palabra no existe');
    return res.status(HttpStatus.OK).json(palabra);
 } 

@Delete('/delete')
async deletePalabra (@Res() res, @Query('palabraID')palabraID){
    const palabraDeleted = await this.palabraService.deletePalabra(palabraID);
    if (!palabraDeleted) throw new NotFoundException('Palabra no existe');
    return res.status(HttpStatus.OK).json({
        message: 'Palabra eliminada',
        palabraDeleted
    });

}

@Put('/update')
async updatedPalabra (@Res()res , @Body()createPalabraDTO: CreatepalabraDTO, @Query('palabraID') palabraID )
{
    const updatedPalabra = await this.palabraService.updatePalabra(palabraID,createPalabraDTO);
    if (!updatedPalabra) throw new NotFoundException('Palabra no existe')
    return res.status(HttpStatus.OK).json({
        message: 'Palabra actualizada',
        updatedPalabra:updatedPalabra
    })
}




}
