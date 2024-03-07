"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// path de cliente
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const express_validator_1 = require("express-validator");
const validarcampos_1 = require("../middlewares/validarcampos");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
//path: api/v1/cliente
const router = (0, express_1.Router)();
router.post("/", validar_jwt_1.default, [
    // double systema validators
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("telefono", "El telefono es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("direccion", "La direccion es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("TipoDocumento", "El tipo de documento es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("NumeroDocumento", "El numero de documento es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("PlacaVehiculo", "La placa del vehiculo es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("TipoVehiculo", "El tipo de vehiculo es obligatorio pilas pues ").not().isEmpty(),
    validarcampos_1.validarcampo,
    /*    nombre:{type: String,required: true},
       telefono:{type: String,required: true},
       direccion:{type: String,required: true},
       email:{type: String,required: true},
       TipoDocumento:{type: String,required: true},
       NumeroDocumento:{type: String,required: true},
       PlacaVehiculo:{type: String,required: true},
       TipoVehiculo:{type: String,required: true}, */
], cliente_controller_1.crearcliente); //ruta y controlador
//router.get("/",validarJWT,getClientes);
router.get("/", cliente_controller_1.getClientes);
router.get("/:id", validar_jwt_1.default, cliente_controller_1.getfiltroclientes); //: id parametro de busqueda en la peticion se omiten los :
router.put("/:id", validar_jwt_1.default, cliente_controller_1.updatecliente); //ruta y controlador
router.delete("/:id", validar_jwt_1.default, cliente_controller_1.deletecliente); //ruta y controlador
router.put("/nombre/:id", validar_jwt_1.default, cliente_controller_1.nombreactualizar); //ruta y controlador */
exports.default = router; // for can use in others parts of code
// si esta validarJWT se requiere token , este deberia ir en el header a traves de x-Token
//# sourceMappingURL=cliente.route.js.map