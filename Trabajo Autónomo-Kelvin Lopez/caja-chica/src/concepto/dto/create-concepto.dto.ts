import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateConceptoDto {



    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    Concepto: string


    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    Detalle: string

    
}
