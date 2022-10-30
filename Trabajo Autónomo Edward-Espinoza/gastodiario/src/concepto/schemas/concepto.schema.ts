import { Schema } from 'mongoose';

export const conceptoSchema = new Schema({
    id: {type: String ,required: true},
    producto: String,
    precio:  Number,
    description: String,
});
