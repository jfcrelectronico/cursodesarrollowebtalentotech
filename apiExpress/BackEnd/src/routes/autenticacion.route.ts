import { check } from "express-validator";
import { validarcampo } from "../middlewares/validarcampos";
import { Router } from "express";
import { login } from "../controllers/autenticacion.controller";

//path: api/v1/autenticacion
const router = Router();
router.post("/",
[   // for use this npm -i express-validator
    // double systema validators
   
    check("login","El numero de documento es obligatorio pilas pues ").not().isEmpty(),
    check("password","El numero de documento es obligatorio pilas pues ").not().isEmpty(),
    validarcampo,

 /*    nombre:{type: String,required: true},
    telefono:{type: String,required: true},
    direccion:{type: String,required: true},
    email:{type: String,required: true},
    TipoDocumento:{type: String,required: true},
    NumeroDocumento:{type: String,required: true},
    PlacaVehiculo:{type: String,required: true},
    TipoVehiculo:{type: String,required: true}, */

]
,login);//ruta y controlador autenticacion
export default router;// for can use in others parts of code