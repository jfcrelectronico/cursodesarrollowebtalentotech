"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//structure of database
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    TipoDocumento: { type: String, required: true },
    NumeroDocumento: { type: String, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, default: "admin" },
    estado: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
});
const UsuarioModel = (0, mongoose_1.model)("usuario", usuarioSchema);
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.model.js.map