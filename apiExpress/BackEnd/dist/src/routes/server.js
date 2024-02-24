"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const connection_1 = require("../database/connection");
// you need export class for others files can use
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        (0, connection_1.dbConnection)();
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