import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";



@Schema()
export class Concepto {


    id: ObjectId

    @Prop()
    Concepto: string


    @Prop()
    Detalle: string

}


export const EsquemaConcepto =  SchemaFactory.createForClass( Concepto )