import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { createClienteDTO } from './dto/cliente.dto'
import {ClienteService} from './cliente.service'
import { response } from 'express'

@Controller('cliente')
export class ClienteController {
    
    constructor(private clientetService: ClienteService) {}
    
    @Post('/create')
    async createPost(@Res() res, @Body() createClienteDTO: createClienteDTO) {
        const cliente = await this.clientetService.createcliente(createClienteDTO);
        return res.status(HttpStatus.OK).json({
            message: "cliente Successfuly create",
            cliente
        });
    }


    @Get('/')
    async getcliente(@Res() res) {
        const cliente = await this.clientetService.getCliente();
        return res.status(HttpStatus.OK).json({
            cliente
        });
    }

    @Get('/:clienteID')
    async getCliente(@Res() res, @Param('/clienteID') clienteID) {
        const cliente = await this.clientetService.getCliente();
        if (!cliente) throw new NotFoundException('cliente does not exists')
        return res.status(HttpStatus.OK).json(cliente);
    }
   

    @Delete('/delete')
    async deletecliente(@Res()res, @Query('clienteID') clienteID) {
        const clienteDeleted = await this.clientetService.deletecliente(clienteID);
        if (!clienteDeleted) throw new NotFoundException('cliente Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Cliente Deleted Succesfully',
            clienteDeleted
        }); 
    }   
    
 
    @Put('/update')
    async updatecliente(@Res() res, @Body() createClienteDTO: createClienteDTO, @Query
    ('clienteID') clienteID) {
        const updatecliente = await this.clientetService.updatecliente(clienteID,
            createClienteDTO);
        if (!updatecliente) throw new NotFoundException('Cliente Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'cliente updated Succesfully',
            updatecliente
        });
    }
}