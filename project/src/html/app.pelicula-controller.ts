import {Controller, Get, HttpCode, Param, Post} from "@nestjs/common";

@Controller('Pelicula')
export class AppPeliculaController {
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
}

class Pelicula {
    constructor(public nombre?: string,
                public estreno?: number) {
    }
}