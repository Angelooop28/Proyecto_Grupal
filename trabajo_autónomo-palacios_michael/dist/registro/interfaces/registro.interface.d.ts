import { Document } from "mongoose";
export interface Registro extends Document {
    readonly idIdioma: String;
    readonly idPalabra: String;
    readonly Deletreo: String;
    readonly silabas: String;
    readonly fonetica: String;
}
