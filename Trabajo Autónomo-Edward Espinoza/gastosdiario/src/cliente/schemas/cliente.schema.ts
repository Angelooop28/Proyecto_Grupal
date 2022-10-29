import { Schema } from 'mongoose';

export const clienteSchema = new Schema({
    id: {type: String ,required: true},
    name: String,
    lastname: String,
    identification: String,
});