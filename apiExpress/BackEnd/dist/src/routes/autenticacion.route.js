"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validarcampos_1 = require("../middlewares/validarcampos");
const express_1 = require("express");
const autenticacion_controller_1 = require("../controllers/autenticacion.controller");
const validar_jwt_1 = __importStar(require("../middlewares/validar-jwt"));
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
router.post("/olvidoPassword", [
    (0, express_validator_1.check)("login", "El correo de login es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("NumeroDocumento", "El numero de documento es obligatorio pilas pues ").not().isEmpty(),
    validarcampos_1.validarcampo,
], autenticacion_controller_1.olvidoPassword);
router.put("/actualizarPassword", validar_jwt_1.validarJWTPASS, [
    (0, express_validator_1.check)("password", "El password es obligatorio pilas pues ").not().isEmpty(),
    validarcampos_1.validarcampo,
], autenticacion_controller_1.actualizarPassword); //ruta y controlador
exports.default = router; // for can use in others parts of code
//# sourceMappingURL=autenticacion.route.js.map