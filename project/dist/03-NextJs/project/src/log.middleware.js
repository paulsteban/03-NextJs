"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const component_decorator_1 = require("@nestjs/common/utils/decorators/component.decorator");
const usuario_service_1 = require("./usuario.service");
let LogMiddleware = class LogMiddleware {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    resolve(nombre, anio) {
        return (request, response, next) => {
            console.log("***Nombre y Numero", nombre, anio, this._usuarioService.arregloUsuarios);
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
};
LogMiddleware = __decorate([
    component_decorator_1.Middleware(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], LogMiddleware);
exports.LogMiddleware = LogMiddleware;
//# sourceMappingURL=log.middleware.js.map