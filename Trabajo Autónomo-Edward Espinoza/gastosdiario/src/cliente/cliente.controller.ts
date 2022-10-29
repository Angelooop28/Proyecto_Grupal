import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { createClienteDTO } from './dto/cliente.dto'

@Controller('cliente')
export class ClienteController {

    @Post('/create')
    createPost(@Res() res, @Body() createClienteDTO: createClienteDTO) {
        //console.log(createClienteDTO);
        return res.status(HttpStatus.OK).json({
            message: "received"
        });
    }
}
