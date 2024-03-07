"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWTPASS = void 0;
const jwt = require("jsonwebtoken");
const validarJWT = (req, resp, next) => {
    const token = req.header("x-token");
    if (!token) {
        return resp.status(401).json({
            ok: false,
            msg: "No hay token en la peticion",
        });
    }
    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        req._id = _id;
        next();
    }
    catch (error) {
        return resp.status(401).json({
            ok: false,
            msg: "Token ivalido",
        });
    }
};
const validarJWTPASS = (req, resp, next) => {
    const token = req.header("x-token-pass");
    if (!token) {
        return resp.status(401).json({
            ok: false,
            msg: "No hay token en la peticion",
        });
    }
    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET_CHANGEPASS);
        req._id = _id;
        next();
    }
    catch (error) {
        return resp.status(401).json({
            ok: false,
            msg: "Token ivalido",
        });
    }
};
exports.validarJWTPASS = validarJWTPASS;
exports.default = validarJWT;
//# sourceMappingURL=validar-jwt.js.map