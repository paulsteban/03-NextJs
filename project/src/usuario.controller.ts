import {Controller, Query} from "@nestjs/common";
import {Get, Post,} from "@nestjs/common/utils/decorators/request-mapping.decorator";
import {Req, Res} from "@nestjs/common/utils/decorators/route-params.decorator";
import {UsuarioService} from "../../../03-nestjs/project2/src/usuario.service";
import {Usuario} from "./usuario.service";

@Controller("Usuario")

export class UsuarioController {

    constructor(private _usuarioService: UsuarioService) {

    }

    @Post("crear")
    crearUsuario(@Query() queryParametros,
                 @Req() requeseParametros,
                 @Res() responseParamentros) {
        const enviaNombre = queryParametros.nombre; //undefined
        const enviaApellido = queryParametros.apellido; //undefined
        const enviaEdad = queryParametros.edad; //undefined
        const enviaParametros = enviaNombre && enviaApellido && enviaEdad // true o false

        if (enviaParametros) {
            const nuevoUsuario = new Usuario(queryParametros.nombre, queryParametros.apellido, queryParametros.edad);
            const usuarios = this._usuarioService.agregarUsuario(nuevoUsuario);
            return responseParamentros.send(usuarios);
        } else {
            return responseParamentros.status(400).send({mensaje: "no envia parametros", status: 400})
        }
    }
    @Get("anadirCookie")
    añadirCookie(@Res() response, @Req() request){
        const parametros = {
            nombre: request.query.nombre,valor: request.query.valor
        }
        response.cookie(parametros.nombre,parametros.valor);
        return response.send();

    }
    @Get('buscarCookie/:nombreCookie')
    buscarCookie(
        @Req() request,
        @Res() response,
    ) {
        const nombreCookie = request.params.nombreCookie;

        const existeCookie = request.cookies[nombreCookie];

        if (existeCookie) {
            return response.send(existeCookie);
        } else {
            return response
                .status(400)
                .send({mensaje: 'No existe cookie', status: 400})
        }
        //request.cookie["hola"];
        //request.cookie.hola;


    }
}