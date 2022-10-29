/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface Inversionistas extends Document{
  readonly id: string;
  readonly nombre: string;
  readonly identificador: string;
}