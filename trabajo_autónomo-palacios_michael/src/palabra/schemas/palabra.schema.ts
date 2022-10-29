import { Schema } from "mongoose";
 export const PalabraSchemas = new Schema({
    idPalabra: {type: String, required:true},
    palabra: String,
    Deletreo: String

});