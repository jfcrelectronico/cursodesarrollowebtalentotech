"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const login = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { login: loginUser, password } = req.body;
    try {
        //verificar el login
        const usuario = yield usuario_model_1.default.findOne({ login: loginUser });
        if (!usuario) {
            return resp.status(401).json({
                ok: false,
                msg: "Las credenciales no son validas"
            });
        }
        const validarpassword = bcryptjs_1.default.compareSync(password, usuario.password);
        if (!validarpassword) {
            return resp.status(401).json({
                ok: false,
                msg: "Las credenciales no son validas"
            });
        }
        console.log(usuario);
        const token = yield (0, jwt_1.default)(usuario._id, usuario.login);
        resp.status(200).json({
            ok: true,
            usuario: usuario,
            token,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            error,
            msg: "Hable con el administrador"
        });
    }
});
exports.login = login;
//# sourceMappingURL=autenticacion.controller.js.map