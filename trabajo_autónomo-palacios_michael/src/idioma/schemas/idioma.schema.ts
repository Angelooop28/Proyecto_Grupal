import { Schema } from "mongoose";

export const IdiomaSchema = new Schema({
     id: {type: String ,required: true},
     idIdioma: String,
     idPalabra : String,
     Deletreo : String,
     silabas : String,
     fonetica : String,
});