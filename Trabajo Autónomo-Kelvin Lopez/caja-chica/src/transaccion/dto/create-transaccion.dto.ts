import { IsNotEmpty, IsNumber, IsPositive, IsString, MinLength, Min } from "class-validator"

export class CreateTransaccionDto {


    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    Fecha: string


    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    @Min(2)
    Ingreso: number


    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    @Min(2)
    Egreso: number

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    Observacion: string
}
