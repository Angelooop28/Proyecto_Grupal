import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { createGastoDTO } from './dto/gasto.dto'

import {GastoService} from './gasto.service'
import { response } from 'express';

@Controller('gasto')
export class GastoController {

    constructor(private GatosService: GastoService) {}

    @Post('/create')
    async createPost(@Res() res, @Body() createGastoDTO: createGastoDTO) {
        const gasto = await this.GatosService.creategasto(createGastoDTO);
        return res.status(HttpStatus.OK).json({
            message: "Gasto Successfuly create",
            gasto
        });
    }


    @Get('/')
    async getgasto(@Res() res) {
        const gasto = await this.GatosService.getGasto();
        return res.status(HttpStatus.OK).json({
            gasto
        });
    }

    @Get('/:gastoID')
    async getGasto(@Res() res, @Param('/gastoID') gastoID) {
        const gasto = await this.GatosService.getGasto();
        if (!gasto) throw new NotFoundException('gasto does not exists')
        return res.status(HttpStatus.OK).json(gasto);
    }
   

    @Delete('/delete')
    async deletegasto(@Res()res, @Query('gastoID') gastoID) {
        const gastoDeleted = await this.GatosService.deletegasto(gastoID);
        if (!gastoDeleted) throw new NotFoundException('gasto Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Gasto Deleted Succesfully',
            gastoDeleted
        }); 
    }   
    
 
    @Put('/update')
    async updategasto(@Res() res, @Body() createGastoDTO: createGastoDTO, @Query
    ('gastoID') gastoID) {
        const updategasto = await this.GatosService.updategasto(gastoID,
            createGastoDTO);
        if (!updategasto) throw new NotFoundException('Gasto Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'gasto updated Succesfully',
            updategasto
        });
    }
}
