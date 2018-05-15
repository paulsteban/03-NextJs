import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppPeliculaController} from "./html/app.pelicula-controller";
import {ParametrosController} from "./html/parametros.controller";
import {UsuarioService} from "./usuario.service";
import {LogMiddleware} from "./log.middleware";
import {UsuarioController} from "./usuario.controller";
import {UsuarioEntity} from "./usuario/usuario.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioModule} from "./usuario/usuario.module";
@Module({//Decoradores
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'web',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, }),UsuarioModule],//importar otros modulos

    controllers: [AppController,AppPeliculaController,ParametrosController,UsuarioController],
    components: [UsuarioService],// componentes
})
export class AppModule implements NestModule{

configure(consumer: MiddlewaresConsumer){
    consumer.apply(LogMiddleware)
        .with("EPN", 1989)
            .forRoutes(ParametrosController,AppPeliculaController,AppController);
}
}
