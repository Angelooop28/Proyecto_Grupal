import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query} from '@nestjs/common';
import { createGastoclienteDTO } from './dto/gastocliente.dto'
import { GastoclienteService } from './gastocliente.service'
import { response } from 'express';

@Controller('gastocliente')
export class GastoclienteController {

    constructor(private GastoclienteService: GastoclienteService) {}

    @Post('/create')
    async createPost(@Res() res, @Body() createGastoclienteDTO: createGastoclienteDTO) {
        const gastocliente = await this.GastoclienteService.creategastocliente(createGastoclienteDTO);
        return res.status(HttpStatus.OK).json({
            message: "Gasto del cliente Successfuly create",
            gastocliente
        });
    }


    @Get('/')
    async getgastocliente(@Res() res) {
        const gastocliente = await this.GastoclienteService.getGastocliente();
        return res.status(HttpStatus.OK).json({
            gastocliente
        });
    }

    @Get('/:gastoclienteID')
    async getGastocliente(@Res() res, @Param('/gastoclienteID') gastoclienteID) {
        const gastocliente = await this.GastoclienteService.getGastocliente();
        if (!gastocliente) throw new NotFoundException('gasto cliente does not exists')
        return res.status(HttpStatus.OK).json(gastocliente);
    }
   

    @Delete('/delete')
    async deletegastocliente(@Res()res, @Query('gastoclienteID') gastoclienteID) {
        const gastoclienteDeleted = await this.GastoclienteService.deletegastocliente(gastoclienteID);
        if (!gastoclienteDeleted) throw new NotFoundException('Gasto cliente Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Gasto cliente Deleted Succesfully',
            gastoclienteDeleted
        }); 
    }   
    
 
    @Put('/update')
    async updategastocliente(@Res() res, @Body() createGastoclienteDTO: createGastoclienteDTO, @Query
    ('gastoclienteID') gastoclienteID) {
        const updategastocliente = await this.GastoclienteService.updategastocliente(gastoclienteID,
            createGastoclienteDTO);
        if (!updategastocliente) throw new NotFoundException('Gasto cliente Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'gasto cliente updated Succesfully',
            updategastocliente
        });
    }
}