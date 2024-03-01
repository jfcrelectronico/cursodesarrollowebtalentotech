import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

interface CustomRequest extends Request{
    _id?: number; // ? implica que el campo no es obligatorio
}

const validarJWT =  (req: CustomRequest,resp: Response, next: NextFunction)=>{

    const token = req.header("x-token");
    if(!token)
    {
        return resp.status(401).json({
            ok: false,
            msg: "No hay token en la peticion",
        });
    }

    try{
        const {_id} =jwt.verify(token,process.env.JWT_SECRET);
        req._id= _id;

        next();

    }
    catch(error){
        return resp.status(401).json({
            ok: false,
            msg: "Token ivalido",
        });
    }
};

export default validarJWT;