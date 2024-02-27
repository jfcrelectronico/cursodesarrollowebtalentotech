import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";

import rutasclientes from "./routes/cliente.route";

// you need export class for others files can use
export class Server 
{
    private app: Application;
    private port: string;

    private miapipath ={
        cliente : "/api/v1/cliente",//contexto,versionamiento,pathcontroller
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "3000";
        //base de datos
        dbConnection();
        //llamado a metodos iniciales
        this.middlwares();
        //llamado a rutas
        this.routes();
        
    }

    desarrolloApi(){
        this.app.get("/",(req: Request,resp: Response)=> resp.status(200).json({msg:"Informacion"}));
    }

    middlwares(){
        //lectura del body transformar a json
        this.app.use(express.json());
        this.desarrolloApi();
    }

    routes(): void{
        this.app.use(this.miapipath.cliente, rutasclientes);
    }



    listen():void{
            this.app.listen(this.port,()=>{
            console.log("servidor corriendo en el puerto: ",this.port);
            });
    }

}
// you need export class for others files can use
//export  default Server;