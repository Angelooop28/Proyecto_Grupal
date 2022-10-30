import {Document} from 'mongoose'

export interface cliente extends Document {
    readonly id: null;
    readonly name: string;
    readonly lastname: string;
    readonly identification : string;
}
