//structure of CRUD

import { Request, Response } from "express";
import ClienteModel from "../models/cliente.model";

export const crearcliente = async (req: Request, resp: Response)=>{
    const {body} = req;

    try
    {
        console.log(req);
        console.log(body);


        const clienteNuevo = new ClienteModel(body);
        const clienteCreado = await clienteNuevo.save();

        resp.status(200).json({
        ok: true,
        msg: "Usuario registrado",
        cliente: clienteCreado,
        });






/* 
        const clienteNuevo = new ClienteModel(body);

        const clientecreado = await clienteNuevo.save();
    
        resp.status(200).json({
            ok: true,
           //add sweet alert for the final application
            msg: "Cliente creado",
            cliente : clienteNuevo,
        }); */
    }
    catch (error)
    {
        console.log(error);
        resp.status(400).json({
            ok: false,
           //add sweet alert for the final application
            msg: "Error al crear el cliente",
        });
    }
};
