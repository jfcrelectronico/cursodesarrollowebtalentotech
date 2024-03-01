import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.model";

import bcrypt from "bcryptjs"
import generarJWT from "../helpers/jwt";

export const  login = async(req: Request,resp: Response)=>
{
    const{login:loginUser,password} = req.body;

    try{
        //verificar el login

        const usuario = await UsuarioModel.findOne({login: loginUser});

        if(!usuario)
        {
            return resp.status(401).json({
                ok: false,
                msg: "Las credenciales no son validas"

            });
        }

        const validarpassword = bcrypt.compareSync(password,usuario.password)

        if(!validarpassword)
        {
            return resp.status(401).json({
                ok: false,
                msg: "Las credenciales no son validas"
            });
        }

        console.log(usuario);

    const token = await generarJWT(usuario._id,usuario.login);

        resp.status(200).json({
            ok: true,
            usuario: usuario,
           token,
        });
    }
    catch(error){
        resp.status(400).json({
            ok: false,
            error,
            msg: "Hable con el administrador"
        });

    }
}