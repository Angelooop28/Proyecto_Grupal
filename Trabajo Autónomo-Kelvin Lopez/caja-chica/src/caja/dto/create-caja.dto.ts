import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCajaDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    Descripcion: string
}
