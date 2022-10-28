import { Schema } from "mongoose";

export const IdiomaSchema = new Schema({
     idIdioma: {type: String ,required: true},
     description: String,
});