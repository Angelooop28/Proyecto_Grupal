import { Schema } from 'mongoose';

export const gastoclienteSchema = new Schema({
    id: {type: String ,required: true},
    idcliente: {type: String ,required: true},
    idconcepto: {type: String ,required: true},
    caracteristicas: String,
    fecha: String,
    hora: String,
    valortotal: Number,
});