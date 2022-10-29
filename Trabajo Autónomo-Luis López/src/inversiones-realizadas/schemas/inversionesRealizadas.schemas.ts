/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose'

export const InversionesRealizadasSchema = new Schema({
  id: String,
  idinversionista: String,
  idconceptoinversion: String,
  valorinversion: Number,
  fecha: String,
  duracioninversion: String,
})