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
exports.getProductos = exports.crearProducto = void 0;
const producto_model_1 = __importDefault(require("../models/producto,model"));
// para taer interface desde otro componete en el request se usa CustomRequest
const crearProducto = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req._id; // al usar Customrequest se pueden traer datos desde otros componentes 
    console.log(id);
    try {
        const ProductoNuevo = new producto_model_1.default(Object.assign({ Usuario: id }, body)); //se le asigna a usuario el id captura desde el registro en la base de datos para poder interactuar con el sistema a traves de los token y se desestructura el ...body
        const ProductoCreado = yield ProductoNuevo.save();
        resp.status(200).json({
            ok: true,
            msg: "Producto creado satisfactoriamente",
            ProductoCreado,
        });
    }
    catch (error) {
        console.error(error);
        resp.status(400).json({
            ok: false,
            error,
            msg: "Error al crear crear el producto",
        });
    }
});
exports.crearProducto = crearProducto;
const getProductos = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    //permite regresar todo el listado de productos creados incluido los datos del usuario que lo creo
    try { //populate permite traer datos a traves de la relacion que ya se creo entre el modelo producto y el modelo usuario, se le indica el path que para este caso es usuario, y se le establecen
        //los campos que se desean traer de dicha relacion
        const Productos = yield producto_model_1.default.find().populate({ path: "usuario", select: "Nombre,NumeroDocumento,email" });
        resp.json({
            ok: true,
            Productos,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            error,
        });
    }
});
exports.getProductos = getProductos;
//# sourceMappingURL=producto.controller.js.map