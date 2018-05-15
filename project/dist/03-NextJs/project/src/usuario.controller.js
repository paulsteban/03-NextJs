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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const request_mapping_decorator_1 = require("@nestjs/common/utils/decorators/request-mapping.decorator");
const route_params_decorator_1 = require("@nestjs/common/utils/decorators/route-params.decorator");
const usuario_service_1 = require("../../../03-nestjs/project2/src/usuario.service");
const usuario_service_2 = require("./usuario.service");
let UsuarioController = class UsuarioController {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    crearUsuario(queryParametros, requeseParametros, responseParamentros) {
        const enviaNombre = queryParametros.nombre;
        const enviaApellido = queryParametros.apellido;
        const enviaEdad = queryParametros.edad;
        const enviaParametros = enviaNombre && enviaApellido && enviaEdad;
        if (enviaParametros) {
            const nuevoUsuario = new usuario_service_2.Usuario(queryParametros.nombre, queryParametros.apellido, queryParametros.edad);
            const usuarios = this._usuarioService.agregarUsuario(nuevoUsuario);
            return responseParamentros.send(usuarios);
        }
        else {
            return responseParamentros.status(400).send({ mensaje: "no envia parametros", status: 400 });
        }
    }
    añadirCookie(response, request) {
        const parametros = {
            nombre: request.query.nombre, valor: request.query.valor
        };
        response.cookie(parametros.nombre, parametros.valor);
        return response.send();
    }
    buscarCookie(request, response) {
        const nombreCookie = request.params.nombreCookie;
        const existeCookie = request.cookies[nombreCookie];
        if (existeCookie) {
            return response.send(existeCookie);
        }
        else {
            return response
                .status(400)
                .send({ mensaje: 'No existe cookie', status: 400 });
        }
    }
};
__decorate([
    request_mapping_decorator_1.Post("crear"),
    __param(0, common_1.Query()),
    __param(1, route_params_decorator_1.Req()),
    __param(2, route_params_decorator_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "crearUsuario", null);
__decorate([
    request_mapping_decorator_1.Get("anadirCookie"),
    __param(0, route_params_decorator_1.Res()), __param(1, route_params_decorator_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "a\u00F1adirCookie", null);
__decorate([
    request_mapping_decorator_1.Get('buscarCookie/:nombreCookie'),
    __param(0, route_params_decorator_1.Req()),
    __param(1, route_params_decorator_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "buscarCookie", null);
UsuarioController = __decorate([
    common_1.Controller("Usuario"),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map