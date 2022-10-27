import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";


@Schema()
export class Transaccion {

    id: ObjectId

    @Prop()
    Fecha: string


    @Prop()
    Ingreso: number


    @Prop()
    Egreso: number


    @Prop()
    Observacion: string

}


export const EsquemaTransaccion = SchemaFactory.createForClass( Transaccion )
