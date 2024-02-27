"use strict";
//structure of CRUD
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
exports.crearcliente = void 0;
const cliente_model_1 = __importDefault(require("../models/cliente.model"));
const crearcliente = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        console.log(req);
        console.log(body);
        const clienteNuevo = new cliente_model_1.default(body);
        const clienteCreado = yield clienteNuevo.save();
        resp.status(200).json({
            ok: true,
            msg: "Usuario registrado",
            cliente: clienteCreado,
        });
        /*
                const clienteNuevo = new ClienteModel(body);
        
                const clientecreado = await clienteNuevo.save();
            
                resp.status(200).json({
                    ok: true,
                   //add sweet alert for the final application
                    msg: "Cliente creado",
                    cliente : clienteNuevo,
                }); */
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            //add sweet alert for the final application
            msg: "Error al crear el cliente",
        });
    }
});
exports.crearcliente = crearcliente;
//# sourceMappingURL=cliente.controller.js.map