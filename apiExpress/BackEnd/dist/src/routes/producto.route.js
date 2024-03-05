"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const validarcampos_1 = require("../middlewares/validarcampos");
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const router = (0, express_1.Router)();
router.post("/", validar_jwt_1.default, [
    // double systema validators
    (0, express_validator_1.check)("Nombre", "El nombre es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("Precio", "El precio es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("Categoria", "La categoria es obligatoria pilas pues ").not().isEmpty(),
    validarcampos_1.validarcampo,
], producto_controller_1.crearProducto); //ruta y controlador
router.get("/", validar_jwt_1.default, producto_controller_1.getProductos);
exports.default = router; // for can use in others parts of code
//# sourceMappingURL=producto.route.js.map