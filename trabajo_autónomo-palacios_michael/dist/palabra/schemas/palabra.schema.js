"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalabraSchemas = void 0;
const mongoose_1 = require("mongoose");
exports.PalabraSchemas = new mongoose_1.Schema({
    idPalabra: { type: String, required: true },
    palabra: String,
    Deletreo: String
});
//# sourceMappingURL=palabra.schema.js.map