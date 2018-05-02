import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppPeliculaController} from "./html/app.pelicula-controller";

@Module({//Decoradores
    imports: [],//importar otros modulos

    controllers: [AppController,AppPeliculaController],
    components: [],// componentes
})
export class AppModule {
}
