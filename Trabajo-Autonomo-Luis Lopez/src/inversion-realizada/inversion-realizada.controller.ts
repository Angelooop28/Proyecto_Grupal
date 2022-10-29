/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateInversionRealizadaDTO } from './dto/inversionRealizada.dto';
import { InversionRealizadaService } from './inversion-realizada.service';

@Controller('inversion-realizada')
export class InversionRealizadaController {

    constructor(private inversionRealizadaService: InversionRealizadaService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createInversionRealizadaDTO: CreateInversionRealizadaDTO) {
      console.log(createInversionRealizadaDTO);
      const inversionRealizada = await this.inversionRealizadaService.createInversionRealizada(createInversionRealizadaDTO);
      return res.status(HttpStatus.OK).json({
        message: 'received',
        inversionRealizada: inversionRealizada
      });
    }
    @Get('/')
    async getInversionesRealizadas (@Res()res ){
        const inversionesRealizadas = await this.inversionRealizadaService.getInversionesRealizadas();
        return res.status(HttpStatus.OK).json({
          inversionesRealizadas
        });
    }
    @Get('/:inversionRealizadaID')
      async getInversionRealizada (@Res() res, @Param('inversionRealizadaID') inversionRealizadaID ){
          const getinversionRealizada = await this.inversionRealizadaService.getInversionRealizada(inversionRealizadaID);
          if (!getinversionRealizada) throw new NotFoundException('Registro No existe');
          return res.status(HttpStatus.OK).json(getinversionRealizada);
    }
    @Delete('/delete:inversionRealizadaID')
      async deleteInversionRealizada (@Res() res, @Query('inversionRealizadaID') inversionRealizadaID ){
          const deleteInversionRealizada = await this.inversionRealizadaService.deleteInversionRealizada(inversionRealizadaID);
          if (!deleteInversionRealizada) throw new NotFoundException('Registro No existe');
          return res.status(HttpStatus.OK).json({
              message: 'Producto eliminado',
              deleteInversionRealizada
          });
    }
    @Put('/update')
      async updateInversionRealizada (@Res() res, @Body() createInversionRealizadaDTO: CreateInversionRealizadaDTO, @Query('inversionRealizadaID')inversionRealizadaID){
          const updatedInversionRealizada = await this.inversionRealizadaService.updateInversionRealizada(inversionRealizadaID, createInversionRealizadaDTO);
          if (!updatedInversionRealizada) throw new NotFoundException('Registro No existe');
          return res.status(HttpStatus.OK).json({
              message: 'Registro Actualizado',
              updatedInversionRealizada
          });
    }
}
