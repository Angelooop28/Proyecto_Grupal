/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateInversionistaDTO } from './dto/inversionista.dto';
import { InversionistaService } from './inversionista.service'

@Controller('inversionista')
export class InversionistaController {

  constructor(private inversionistaService: InversionistaService){}

  @Post('/create')
  async createPost(@Res() res,@Body() createInversionistaDTO: CreateInversionistaDTO) {
    //console.log(createInversionistaDTO);
    const inversionista = await this.inversionistaService.createInversionista(createInversionistaDTO);
    return res.status(HttpStatus.OK).json({
      message: 'recivied',
      inversionista: inversionista
    });
  }
  @Get('/')
  async getInversionistas (@Res()res ){
      const inversionistas = await this.inversionistaService.getInversionistas();
      return res.status(HttpStatus.OK).json({
          inversionistas
      });
  }
  @Get('/:inversionistaID')
    async getInversionista(@Res() res, @Param('inversionistaID') inversionistaID ){
        const inversionista = await this.inversionistaService.getInversionista(inversionistaID);
        if (!inversionista) throw new NotFoundException('Registro No existe');
        return res.status(HttpStatus.OK).json(inversionista);
  }
  @Delete('/delete:inversionistaID')
    async deleteInversionista (@Res() res, @Query('inversionistaID') inversionistaID ){
        const InversionistaDeleted = await this.inversionistaService.deleteInversionista(inversionistaID);
        if (!InversionistaDeleted) throw new NotFoundException('Registro No existe');
        return res.status(HttpStatus.OK).json({
            message: 'Producto eliminado',
            InversionistaDeleted
        });
  }
  @Put('/update')
    async updateInversionista(@Res() res, @Body()createInversionistaDTO: CreateInversionistaDTO, @Query('inversionistaID')inversionistaID ){

        const updatedInversionista = await this.inversionistaService.updateInversionista(inversionistaID,createInversionistaDTO);
        if (!updatedInversionista) throw new NotFoundException('Registro No existe');
        return res.status(HttpStatus.OK).json({
            message: 'Registro Actualizado',
            updatedInversionista
        });
  }
}
