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
exports.crearUsuario = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crearUsuario = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeLogin = yield usuario_model_1.default.findOne({
            login: body.login,
        });
        if (existeLogin) {
            return resp.status(409).json({
                ok: false,
                msg: `Ya existe un login ${body.login} creado`,
            });
        }
        console.log("AQUI 1");
        const newUsuario = new usuario_model_1.default(Object.assign({}, body));
        console.log("AQUI 2");
        const iteraciones = bcryptjs_1.default.genSaltSync(10);
        console.log("AQUI 3");
        console.log(body.password);
        newUsuario.password = bcryptjs_1.default.hashSync(body.password, iteraciones);
        console.log("Contraseña ", newUsuario.password);
        const usuarioCreado = yield newUsuario.save();
        resp.status(200).json({
            ok: true,
            msg: "Usuario Creado con exito",
            usuarioCreado,
        });
    }
    catch (error) {
        console.error(error);
        resp.status(400).json({
            ok: false,
            error,
            msg: "Error al crear el usuario, comuniquese con el administrador del sistema",
        });
    }
});
exports.crearUsuario = crearUsuario;
//# sourceMappingURL=usuario.controller.js.map