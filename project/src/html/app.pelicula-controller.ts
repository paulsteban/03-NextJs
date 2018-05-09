import {Controller, Get, HttpCode, Param, Post, Req, Res} from "@nestjs/common";
import {UsuarioService} from "../usuario.service";

@Controller('Pelicula')
export class AppPeliculaController {
    constructor(private _usuarioService:UsuarioService) {

    }

    peliculas: Pelicula[] = [];

    @Get('mostrarCartelera')
    mostrarCartelera() {
        return this.peliculas;
    }

    @Post('mostrarCartelera/:nombre/:estreno')
    @HttpCode(203)
    anadirACartelera(@Param() parametros) {

        this.peliculas
            .push(new Pelicula(
                parametros.nombre,
                parametros.estreno)
            );

        return this.peliculas;
    }

    @Post('mostrarCartelera')
    @HttpCode(201)
    anadirACarteleraConQueryParameters(
        @Req() req,
        @Res() res) {
        const paramtrosQuery = req.query;
        this.peliculas
            .push(new Pelicula(
                paramtrosQuery.nombre,
                paramtrosQuery.estreno)
            );
        return res.send(this.peliculas);
    }
}

class Pelicula {
    constructor(public nombre?: string,
                public estreno?: number) {
    }
}