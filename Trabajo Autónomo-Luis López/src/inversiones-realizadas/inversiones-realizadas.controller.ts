/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body} from '@nestjs/common';
import {CreateInversionRealizadaDTO} from './dto/inversionesRealizadas.dto';
import { InversionesRealizadasService } from './inversiones-realizadas.service';

@Controller('inversiones-realizadas')
export class InversionesRealizadasController {

  constructor(private inversionRealizadaService: InversionesRealizadasService){}

  @Post('/create')
  async createPost(@Res() res, @Body() createInversionRealizadaDTO: CreateInversionRealizadaDTO) {
    const inversionRealizada = await this.inversionRealizadaService.createInversionRealizada(createInversionRealizadaDTO);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      inversionRealizada: inversionRealizada
    });
  }
}
