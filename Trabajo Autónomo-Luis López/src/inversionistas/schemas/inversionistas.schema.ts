/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const InversionistaSchema = new Schema({
  id: String,
  nombre: String,
  identificador: String,
})