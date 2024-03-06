"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validarcampos_1 = require("../middlewares/validarcampos");
const express_1 = require("express");
const autenticacion_controller_1 = require("../controllers/autenticacion.controller");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
//path: api/v1/autenticacion
const router = (0, express_1.Router)();
router.post("/", [
    // double systema validators
    // no se usa validacion por token pues seria imposible entrar al sistema
    (0, express_validator_1.check)("login", "El correo de login es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password es obligatorio pilas pues ").not().isEmpty(),
    validarcampos_1.validarcampo,
    /*    nombre:{type: String,required: true},
       telefono:{type: String,required: true},
       direccion:{type: String,required: true},
       email:{type: String,required: true},
       TipoDocumento:{type: String,required: true},
       NumeroDocumento:{type: String,required: true},
       PlacaVehiculo:{type: String,required: true},
       TipoVehiculo:{type: String,required: true}, */
], autenticacion_controller_1.login); //ruta y controlador autenticacion
router.get("/", validar_jwt_1.default, autenticacion_controller_1.RenovarToken);
router.post("/olvidoPassword", autenticacion_controller_1.olvidoPassword);
router.put("/actualizarPassword", autenticacion_controller_1.actualizarPassword); //ruta y controlador
exports.default = router; // for can use in others parts of code
//# sourceMappingURL=autenticacion.route.js.map