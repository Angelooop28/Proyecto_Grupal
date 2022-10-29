/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface ConceptoInversiones extends Document{
  readonly id: string;
  readonly concepto: string;
  readonly detalle: string;
}