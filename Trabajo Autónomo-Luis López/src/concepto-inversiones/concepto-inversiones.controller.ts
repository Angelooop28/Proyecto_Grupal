/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import {CreateConceptoInversionDTO} from './dto/conceptoInversiones.dto';
import { ConceptoInversionesService } from './concepto-inversiones.service';

@Controller('concepto-inversiones')
export class ConceptoInversionesController {

  constructor(private conceptoInversionService: ConceptoInversionesService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createConceptoInversionDTO: CreateConceptoInversionDTO) {
      const conceptoInversion = await this.conceptoInversionService.createConceptoInversion(createConceptoInversionDTO);
      return res.status(HttpStatus.OK).json({
        message: 'received',
        conceptoInversion: conceptoInversion
      });
    }
}
