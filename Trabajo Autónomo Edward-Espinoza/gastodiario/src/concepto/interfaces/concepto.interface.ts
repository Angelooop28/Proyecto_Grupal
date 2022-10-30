import {Document} from 'mongoose'

export interface concepto extends Document {
    readonly id: null;
    readonly producto: string;
    readonly precio: number;
    readonly description  : string;
}
