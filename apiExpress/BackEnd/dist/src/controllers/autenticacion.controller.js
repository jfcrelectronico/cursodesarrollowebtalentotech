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
exports.actualizarPassword = exports.olvidoPassword = exports.RenovarToken = exports.login = void 0;
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
const RenovarToken = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req._id;
    try {
        if (typeof id === "undefined") {
            throw new Error("NO existe id");
        }
        const usuario = yield usuario_model_1.default.findById(id);
        //generar token nuevamente
        const token = yield (0, jwt_1.default)(id.toString());
        resp.json({
            ok: true,
            token,
            usuario,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(401).json({
            ok: false,
            error,
            msg: "Hable con el administrador",
        });
    }
});
exports.RenovarToken = RenovarToken;
const olvidoPassword = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    const { login: loginUser, NumeroDocumento: numeroDocumento } = req.body;
    try {
        //verificar el login
        const usuarioExiste = yield usuario_model_1.default.findOne({ login: loginUser, NumeroDocumento: numeroDocumento });
        if (!usuarioExiste) {
            return resp.status(401).json({
                ok: false,
                msg: "Las credenciales no son validas"
            });
        }
        console.log(usuarioExiste);
        token = yield (0, jwt_1.default)(usuarioExiste._id, usuarioExiste.login, process.env.JWT_SECRET_CHANGEPASS);
        resp.status(200).json({
            ok: true,
            usuario: usuarioExiste,
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
exports.olvidoPassword = olvidoPassword;
const actualizarPassword = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req._id;
    console.log("abcd1234");
    console.log(id);
    const { body } = req;
    try {
        const usuarioActualizar = new usuario_model_1.default(Object.assign({}, body));
        console.log(body.id);
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            //add sweet alert for the final application
            msg: "Error al actualizar password",
        });
    }
    /*  try{
 
         const {body} = req;
 
 
 
             // id por el cual busco al clienbte, la info a asignar, retorne la informacion actualizada
             //para la actualizacion  solo se podria enviar el dato a actualizar no se requiere todo el cuerpo
             
             const usuarioActualizar = new UsuarioModel({
                 //Desestructure el body que esta recibiendo
                 ...body,
             });
           
             const iteraciones = bcrypt.genSaltSync(10);
     
             usuarioActualizar.password = bcrypt.hashSync(body.password, iteraciones);
            console.log("id recibido") ;
            console.log(id);
             
             const passwordActualizado = await UsuarioModel.findByIdAndUpdate(id,usuarioActualizar.password);
             resp.status(200).json({
                 ok: true,
                 msg: "Usuario con id: " + id + " fue actualizado",
                 passwordActualizado,
             }
                 
             );
 
     }
     catch(error)
     {
         console.log(error);
         resp.status(400).json({
             ok: false,
             //add sweet alert for the final application
             msg: "Error al actualizar password",
         });
     
 
 
     }
  */
});
exports.actualizarPassword = actualizarPassword;
//# sourceMappingURL=autenticacion.controller.js.map