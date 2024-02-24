import express, { Application } from "express";
import { dbConnection } from "../database/connection";

// you need export class for others files can use
export class Server 
{
    private app: Application;
    private port: string;
    constructor(){
        this.app = express();
        this.port = process.env.PORT || "3000";
        dbConnection();
    }

    listen():void{
            this.app.listen(this.port,()=>{
            console.log("servidor corriendo en el puerto: ",this.port);
            });
    }

}
// you need export class for others files can use
//export  default Server;