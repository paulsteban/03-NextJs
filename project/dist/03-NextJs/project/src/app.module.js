"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_pelicula_controller_1 = require("./html/app.pelicula-controller");
const parametros_controller_1 = require("./html/parametros.controller");
const usuario_service_1 = require("./usuario.service");
const log_middleware_1 = require("./log.middleware");
const usuario_controller_1 = require("./usuario.controller");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_module_1 = require("./usuario/usuario.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(log_middleware_1.LogMiddleware)
            .with("EPN", 1989)
            .forRoutes(parametros_controller_1.ParametrosController, app_pelicula_controller_1.AppPeliculaController, app_controller_1.AppController);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'web',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            }), usuario_module_1.UsuarioModule],
        controllers: [app_controller_1.AppController, app_pelicula_controller_1.AppPeliculaController, parametros_controller_1.ParametrosController, usuario_controller_1.UsuarioController],
        components: [usuario_service_1.UsuarioService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map