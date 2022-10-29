/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateInversionistaDTO } from './dto/inversionistas.dto';
import { InversionistasService } from './inversionistas.service';

@Controller('inversionistas')
export class InversionistasController {

  constructor(private inversionistaService: InversionistasService){}

  @Post('/create')
  async createPost(@Res() res, @Body() createInversionistaDTO: CreateInversionistaDTO) {
    const inversionista = await this.inversionistaService.createInversionista(createInversionistaDTO);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      inversionista: inversionista
    });
  }
}