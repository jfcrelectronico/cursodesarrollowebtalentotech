import { Request,Response } from "express";
import UsuarioModel from "../models/usuario.model";

import bcrypt from "bcryptjs";

export const crearUsuario = async (req: Request, resp: Response)=>{
    const {body} = req;
    try{
        const existeLogin = await UsuarioModel.findOne({
            login: body.login,
        });

        if (existeLogin)
        {
            return resp.status(409).json({
                ok: false,
                msg: `Ya existe un login ${body.login} creado`,

            });
        }

        const existeDocumento = await UsuarioModel.findOne({
            NumeroDocumento: body.NumeroDocumento,
        });

        if (existeDocumento)
        {
            return resp.status(409).json({
                ok: false,
                msg: `Ya existe un documento ${body.NumeroDocumento} creado`,

            });
        }

    
        const newUsuario = new UsuarioModel({
            //Desestructure el body que esta recibiendo
            ...body,
        });
      
        const iteraciones = bcrypt.genSaltSync(10);    

        newUsuario.password = bcrypt.hashSync(body.password, iteraciones);

        const usuarioCreado = await newUsuario.save();

        resp.status(200).json({
            ok: true,
            msg: "Usuario Creado con exito",
            usuarioCreado,
        });

        


    }catch (error)
    {
        console.error(error);
        resp.status(400).json({
            ok: false,
            error,
            msg: "Error al crear el usuario, comuniquese con el administrador del sistema",
        });

    }

};