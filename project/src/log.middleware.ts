import {Middleware} from "@nestjs/common/utils/decorators/component.decorator";
import {ExpressMiddleware, NestMiddleware} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Middleware()
export class LogMiddleware implements NestMiddleware{
    constructor(private _usuarioService:UsuarioService) {

}
resolve(nombre:string,anio: number): ExpressMiddleware{
    return (request,response,next)=>{
        console.log("***Nombre y Numero", nombre, anio,this._usuarioService.arregloUsuarios);
            const respuesta = {
            baseUrl: request.baseUrl,
            hostname: request.hostname,
            subdomains: request.subdomains,
            ip: request.ip,
            method: request.method,
            originalUrl: request.originalUrl,
            path: request.path,
            protocol: request.protocol,
            header: request.headers,
        };
        console.log(respuesta);
        next();

    };
}
}