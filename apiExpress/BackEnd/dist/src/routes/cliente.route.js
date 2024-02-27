"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// path de cliente
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const router = (0, express_1.Router)();
router.post("/", cliente_controller_1.crearcliente); //ruta y controlador
exports.default = router; // for can use in others parts of code
//# sourceMappingURL=cliente.route.js.map