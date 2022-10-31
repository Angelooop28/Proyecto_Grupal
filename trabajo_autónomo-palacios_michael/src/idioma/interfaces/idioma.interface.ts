import { Document } from "mongoose";

export interface Idioma extends Document{
    readonly idIdioma: string;
    readonly description: string;}