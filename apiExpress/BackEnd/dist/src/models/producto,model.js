"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//structure of database
const mongoose_1 = require("mongoose");
//el esquema debera cumplir con las especificaciones de la interfaces indicada para este caso el contenedor de interfaces IProducto
const productoSchema = new mongoose_1.Schema({
    Nombre: { type: String, required: true },
    Descripcion: { type: String },
    Precio: { type: Number, required: true },
    Categoria: { type: String, required: true },
    Stock: { type: Number, required: true },
    CreatedAt: { type: Date, default: Date.now() },
    Peso: { type: String, required: true },
    IP: { type: String },
    Estado: { type: Boolean, required: true, default: true },
    Caracteristicas: { type: Object, required: true }, // es un objeto del tipo ICaracteristicas
    ProgramasInstalados: { type: Object, required: true }, // es un objeto del tipo IProgramasInstalados
    Opiniones: { type: Object }, // es un objeto del tipo IOpiniones
    Usuario: { type: mongoose_1.Schema.Types.ObjectId, ref: "usuario", required: true }, // va a ser un esquema del tipo modelo usuario que trae el ID de dicho usuario
});
//recibe la interface IProducto se recomineda tipar el model para este caso cn la interface IProducto
const ProductoModel = (0, mongoose_1.model)("producto", productoSchema);
exports.default = ProductoModel;
//# sourceMappingURL=producto,model.js.map