import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";


@Schema()
export class Caja {


    id: ObjectId

    @Prop()
    Descripcion: string

}


export const  EsquemaCaja = SchemaFactory.createForClass( Caja )
