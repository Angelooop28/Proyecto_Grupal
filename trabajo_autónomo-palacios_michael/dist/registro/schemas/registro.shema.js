"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RegistroSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    idIdioma: String,
    idPalabra: String,
    Deletreo: String,
    silabas: String,
    fonetica: String,
});
//# sourceMappingURL=registro.shema.js.map