import { IsNotEmpty, IsNumber, IsPositive, IsString, MinLength, Min } from "class-validator"

export class CreateTransaccionDto {


    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    Fecha: string


    @IsNotEmpty()
    @MinLength(2)
    @IsString()
    Ingreso: string


    @IsNotEmpty()
    @MinLength(2)
    @IsString()
    Egreso: string

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    Observacion: string
}
