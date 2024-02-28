"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//structure of database
const mongoose_1 = require("mongoose");
const clienteSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true },
    email: { type: String, required: true },
    TipoDocumento: { type: String, required: true },
    NumeroDocumento: { type: String, required: true },
    PlacaVehiculo: { type: String, required: true },
    TipoVehiculo: { type: String, required: true },
    Observaciones: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});
const ClienteModel = (0, mongoose_1.model)("cliente", clienteSchema);
exports.default = ClienteModel;
//# sourceMappingURL=cliente.model.js.map