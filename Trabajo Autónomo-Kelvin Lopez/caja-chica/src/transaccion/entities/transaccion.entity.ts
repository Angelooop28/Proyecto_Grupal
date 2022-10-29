import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";


@Schema()
export class Transaccion {

    id: ObjectId

    @Prop()
    Fecha: string


    @Prop()
    Ingreso: string


    @Prop()
    Egreso: string


    @Prop()
    Observacion: string

}


export const EsquemaTransaccion = SchemaFactory.createForClass( Transaccion )
