// path de cliente
import { Router } from "express";
import { crearcliente } from "../controllers/cliente.controller";

const router = Router();
router.post("/",crearcliente);//ruta y controlador

export default router;// for can use in others parts of code