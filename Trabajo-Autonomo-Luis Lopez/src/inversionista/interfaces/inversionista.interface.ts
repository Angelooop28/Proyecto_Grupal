/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface Inversionista extends Document{
  readonly id: string;
  readonly nombre: string;
  readonly identificador: string;
}