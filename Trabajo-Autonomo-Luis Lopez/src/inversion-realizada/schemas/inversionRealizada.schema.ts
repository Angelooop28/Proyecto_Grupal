/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const InversionRealizadaSchema = new Schema({
  id: String,
  idinversionista: String,
  idconceptoinversion: String,
  valorinversion: String,
  fecha: String,
  duracioninversion: String,
})