/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose'

export const ConceptoInversionistasSchema = new Schema({
  id: String,
  concepto: String,
  detalle: String,
})