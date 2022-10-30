import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { ConceptoService } from './concepto.service'
import { response } from 'express'
import { createConceptoDTO } from './dto/concepto.dto';

@Controller('concepto')
export class ConceptoController {

    constructor(private ConceptoService: ConceptoService) {}

    @Post('/create')
    async createPost(@Res() res, @Body() createConceptoDTO: createConceptoDTO) {
        const concepto = await this.ConceptoService.createconcepto(createConceptoDTO);
        return res.status(HttpStatus.OK).json({
            message: "concepto Successfuly create",
            concepto
        });
    }

    @Get('/')
    async getconcepto(@Res() res) {
        const concepto = await this.ConceptoService.getConcepto();
        return res.status(HttpStatus.OK).json({
            concepto
        });
    }

    @Get('/:conceptoID')
    async getConcepto(@Res() res, @Param('/conceptoID') conceptoID) {
        const concepto = await this.ConceptoService.getConcepto();
        if (!concepto) throw new NotFoundException('concepto does not exists')
        return res.status(HttpStatus.OK).json(concepto);
    }
   

    @Delete('/delete')
    async deleteconcepto(@Res()res, @Query('conceptoID') conceptoID) {
        const conceptoDeleted = await this.ConceptoService.deleteconcepto(conceptoID);
        if (!conceptoDeleted) throw new NotFoundException('concepto Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Concepto Deleted Succesfully',
            conceptoDeleted
        }); 
    }   
    
 
    @Put('/update')
    async updateconcepto(@Res() res, @Body() createConceptoDTO: createConceptoDTO, @Query
    ('conceptoID') conceptoID) {
        const updateconcepto = await this.ConceptoService.updateconcepto(conceptoID,
            createConceptoDTO);
        if (!updateconcepto) throw new NotFoundException('Concepto Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'concepto updated Succesfully',
            updateconcepto
        });
    }
}