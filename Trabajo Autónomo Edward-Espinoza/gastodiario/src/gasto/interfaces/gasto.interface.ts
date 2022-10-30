import {Document} from 'mongoose'

export interface gasto extends Document {
    readonly id: null;
    readonly caracteristicas: string;
    readonly fecha: number;
    readonly valortotal : string;
}
