import { Schema } from 'mongoose';

export const gastoSchema = new Schema({
    id: {type: String ,required: true},
    caracteristicas: String,
    fecha: Number,
    valortotal: String,
});
