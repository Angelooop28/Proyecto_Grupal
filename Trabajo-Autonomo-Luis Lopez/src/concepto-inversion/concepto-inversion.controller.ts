/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, Query, NotFoundException} from '@nestjs/common';
import { CreateConceptoInversionDTO } from './dto/conceptoInversion.dto';
import { ConceptoInversionService } from './concepto-inversion.service';

@Controller('concepto-inversion')
export class ConceptoInversionController {

    constructor(private conceptoInversionService: ConceptoInversionService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createConceptoInversionDTO: CreateConceptoInversionDTO) {
      console.log(createConceptoInversionDTO);
      const conceptoInversion = await this.conceptoInversionService.createConceptoInversion(createConceptoInversionDTO);
      return res.status(HttpStatus.OK).json({
        message: 'received',
        conceptoInversion: conceptoInversion
      });
    }
    @Get('/')
    async getConceptoInversiones (@Res()res ){
        const conceptoInversiones = await this.conceptoInversionService.getConceptoInversiones();
        return res.status(HttpStatus.OK).json({
          conceptoInversiones
        });
    }
    @Get('/:conceptoInversionID')
      async getconceptoInversion (@Res() res, @Param('conceptoInversionID') conceptoInversionID  ){
          const conceptoInversion  = await this.conceptoInversionService.getConceptoInversion(conceptoInversionID);
          if (!conceptoInversion) throw new NotFoundException('Registro No existe');
          return res.status(HttpStatus.OK).json(conceptoInversion);
    }
    @Delete('/delete:conceptoInversionID')
      async deleteConceptoInversion (@Res() res, @Query('conceptoInversionID') conceptoInversionID ){
          const conceptoInversionDeleted = await this.conceptoInversionService.deleteConceptoInversion(conceptoInversionID);
          if (!conceptoInversionDeleted) throw new NotFoundException('Registro No existe');
          return res.status(HttpStatus.OK).json({
              message: 'Producto eliminado',
              conceptoInversionDeleted
          });
    }
    @Put('/update')
      async updateConceptoInversion (@Res() res, @Body() createConceptoInversionDTO: CreateConceptoInversionDTO, @Query('conceptoInversionID')conceptoInversionID){

          const updatedConceptoInversionista = await this.conceptoInversionService.updateConceptoInversion(conceptoInversionID, createConceptoInversionDTO);
          if (!updatedConceptoInversionista) throw new NotFoundException('Registro No existe');
          return res.status(HttpStatus.OK).json({
              message: 'Registro Actualizado',
              updatedConceptoInversionista
          });
    }

}
