"use strict";
// son funciones que se ejecutan antes de ir al controlador/
//con ello si se tienen errores no se hace las peticiones a la base
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarcampo = void 0;
const express_validator_1 = require("express-validator");
const validarcampo = (req, resp, next) => {
    const errores = (0, express_validator_1.validationResult)(req);
    if (!errores.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errores: errores.mapped(),
        });
    }
    next();
};
exports.validarcampo = validarcampo;
//# sourceMappingURL=validarcampos.js.map