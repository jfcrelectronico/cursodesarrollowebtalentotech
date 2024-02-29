"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const usuario_controller_1 = require("../controllers/usuario.controller");
const express_1 = require("express");
const validarcampos_1 = require("../middlewares/validarcampos");
const router = (0, express_1.Router)();
router.post("/", [
    // double systema validators
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("TipoDocumento", "El tipo de documento es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("NumeroDocumento", "El numero de documento es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("login", "El numero de documento es obligatorio pilas pues ").not().isEmpty(),
    (0, express_validator_1.check)("password", "El numero de documento es obligatorio pilas pues ").not().isEmpty(),
    validarcampos_1.validarcampo,
    /*    nombre:{type: String,required: true},
       telefono:{type: String,required: true},
       direccion:{type: String,required: true},
       email:{type: String,required: true},
       TipoDocumento:{type: String,required: true},
       NumeroDocumento:{type: String,required: true},
       PlacaVehiculo:{type: String,required: true},
       TipoVehiculo:{type: String,required: true}, */
], usuario_controller_1.crearUsuario); //ruta y controlador
exports.default = router; // for can use in others parts of code
//# sourceMappingURL=usuario.route.js.map