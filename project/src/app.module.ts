import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppPeliculaController} from "./html/app.pelicula-controller";
import {ParametrosController} from "./html/parametros.controller";
import {UsuarioService} from "./usuario.service";
import {LogMiddleware} from "./log.middleware";

@Module({//Decoradores
    imports: [],//importar otros modulos

    controllers: [AppController,AppPeliculaController,ParametrosController],
    components: [UsuarioService],// componentes
})
export class AppModule implements NestModule{

configure(consumer: MiddlewaresConsumer){
    consumer.apply(LogMiddleware)
        .with("EPN", 1989)
            .forRoutes(ParametrosController,AppPeliculaController,AppController);
}
}
