import { Schema } from "mongoose";

 export const RegistroSchema = new Schema({

    id:{type:String, required:true},
    idIdioma:String,
    idPalabra:String,
    Deletreo: String,
    silabas:String,
    fonetica:String,
});