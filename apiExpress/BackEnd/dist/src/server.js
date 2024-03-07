"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const cliente_route_1 = __importDefault(require("./routes/cliente.route"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const autenticacion_route_1 = __importDefault(require("./routes/autenticacion.route"));
const producto_route_1 = __importDefault(require("./routes/producto.route"));
const cors_1 = __importDefault(require("cors"));
// you need export class for others files can use
class Server {
    constructor() {
        this.miapipath = {
            cliente: "/api/v1/cliente", //contexto,versionamiento,pathcontroller
            usuario: "/api/v1/usuario", //contexto,versionamiento,pathcontroller
            validacioncredenciales: "/api/v1/autenticacion", //contexto,versionamiento,pathcontroller
            producto: "/api/v1/producto", //contexto,versionamiento,pathcontroller
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        //base de datos
        (0, connection_1.dbConnection)();
        //llamado a metodos iniciales
        this.middlwares();
        //llamado a rutas
        this.routes();
    }
    desarrolloApi() {
        this.app.get("/", (req, resp) => resp.status(200).json({ msg: "Informacion" }));
    }
    middlwares() {
        //lectura del body transformar a json
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.desarrolloApi();
    }
    routes() {
        this.app.use(this.miapipath.cliente, cliente_route_1.default);
        this.app.use(this.miapipath.usuario, usuario_route_1.default);
        this.app.use(this.miapipath.validacioncredenciales, autenticacion_route_1.default);
        this.app.use(this.miapipath.producto, producto_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en el puerto: ", this.port);
        });
    }
}
exports.Server = Server;
// you need export class for others files can use
//export  default Server;
//# sourceMappingURL=server.js.map