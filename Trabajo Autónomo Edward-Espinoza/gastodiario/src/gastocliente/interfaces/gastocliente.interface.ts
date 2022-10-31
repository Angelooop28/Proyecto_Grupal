import {Document} from 'mongoose'

export interface gastocliente extends Document {
    readonly id: null;
    readonly idcliente: null;
    readonly idconcepto: null;
    readonly caracteristicas: string;
    readonly fecha: string;
    readonly hora: string;
    readonly valortotal : number;
}