import {  Document} from "mongoose";
export interface Palabra extends Document{
    idPalabra: {type: string, required:true},
    palabra: string,
    Deletreo: string
}