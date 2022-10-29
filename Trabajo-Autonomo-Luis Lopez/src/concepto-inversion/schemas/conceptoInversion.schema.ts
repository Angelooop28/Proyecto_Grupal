/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose'

export const ConceptoInversionSchema = new Schema({
  id: String,
  concepto: String,
  detalle: String,
})