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
exports.nombreactualizar = exports.deletecliente = exports.updatecliente = exports.getfiltroclientes = exports.getClientes = exports.crearcliente = void 0;
const cliente_model_1 = __importDefault(require("../models/cliente.model"));
const crearcliente = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        console.log(req);
        console.log(body);
        // se debe definir la estructura de datos antes de enviar a la base
        const clienteNuevo = new cliente_model_1.default(body);
        //se usa el metodo save para guardar el registro en la base
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
const getClientes = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield cliente_model_1.default.find();
        resp.status(200).json({
            ok: true,
            msg: "Usuarios en base",
            clientes,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            //add sweet alert for the final application
            msg: "Error al consultar los clientes",
        });
    }
});
exports.getClientes = getClientes;
const getfiltroclientes = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const clienteencontrado = yield cliente_model_1.default.findById({ _id: id });
        resp.status(200).json({
            ok: true,
            msg: "Usuario con id: " + id,
            clienteencontrado,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            //add sweet alert for the final application
            msg: "Error al consultar los clientes",
        });
    }
});
exports.getfiltroclientes = getfiltroclientes;
const updatecliente = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        //const bodystructure = req.body;
        const { body } = req;
        //body.updateAt = Date.now;
        // id por el cual busco al clienbte, la info a asignar, retorne la informacion actualizada
        //para la actualizacion  solo se podria enviar el dato a actualizar no se requiere todo el cuerpo
        const clienteactualizado = yield cliente_model_1.default.findByIdAndUpdate(id, body);
        resp.status(200).json({
            ok: true,
            msg: "Usuario con id: " + id + " fue actualizado",
            clienteactualizado,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            //add sweet alert for the final application
            msg: "Error al consultar los clientes",
        });
    }
});
exports.updatecliente = updatecliente;
const deletecliente = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        //const bodystructure = req.body;
        const { body } = req;
        //body.updateAt = Date.now;
        // id por el cual busco al clienbte, la info a asignar, retorne la informacion actualizada
        //para la actualizacion  solo se podria enviar el dato a actualizar no se requiere todo el cuerpo
        const clienteeliminado = yield cliente_model_1.default.findByIdAndDelete(id);
        resp.status(200).json({
            ok: true,
            msg: "Usuario con id: " + id + " fue eliminado",
            clienteeliminado,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            //add sweet alert for the final application
            msg: "Error al consultar los clientes",
        });
    }
});
exports.deletecliente = deletecliente;
const nombreactualizar = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        //const bodystructure = req.body;
        //const nombre = req.params.nombre;
        //body.updateAt = Date.now;
        // id por el cual busco al clienbte, la info a asignar, retorne la informacion actualizada
        //para la actualizacion  solo se podria enviar el dato a actualizar no se requiere todo el cuerpo
        // se debe indicar el campo a actualizar para este caso nombre
        const clienteactualizadonombre = yield cliente_model_1.default.findByIdAndUpdate(id, { nombre: "jony" });
        resp.status(200).json({
            ok: true,
            msg: "Al usuario con id: " + id + " se le actualizo el nombre",
            clienteactualizadonombre,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            //add sweet alert for the final application
            msg: "Error al consultar los clientes",
        });
    }
});
exports.nombreactualizar = nombreactualizar;
//# sourceMappingURL=cliente.controller.js.map