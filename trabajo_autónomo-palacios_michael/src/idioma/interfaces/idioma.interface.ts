import { Document } from "mongoose";

export interface Idioma extends Document{
    readonly id: string;
    readonly idIdioma: string;
    readonly idPalabra : string;
    readonly Deletreo : string;
    readonly silabas : string;
    readonly fonetica : string;
}