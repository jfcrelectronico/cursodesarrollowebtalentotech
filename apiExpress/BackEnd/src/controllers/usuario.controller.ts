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

        console.log("AQUI 1");
        const newUsuario = new UsuarioModel({
            //Desestructure el body que esta recibiendo
            ...body,
        });
        console.log("AQUI 2");
        const iteraciones = bcrypt.genSaltSync(10);
        console.log("AQUI 3");

        console.log(body.password);

        newUsuario.password = bcrypt.hashSync(body.password, iteraciones);
        
        console.log("Contraseña ", newUsuario.password);


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