/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface InversionesRealizadas extends Document{
  readonly id: string;
  readonly idinversionista: string;
  readonly idconceptoinversion: string;
  readonly valorinversion: number;
  readonly fecha: string;
  readonly duracioninversion: number;
}