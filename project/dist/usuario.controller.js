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
let UsuarioController = class UsuarioController {
    crearUsuario(queryParametros, requeseParametros, responseParamentros) {
        const enviaNombre = queryParametros.nombre;
        const enviaApellido = queryParametros.apellido;
        const enviaEdad = queryParametros.edad;
        const enviaParametros = enviaNombre && enviaApellido && enviaEdad;
        if (enviaParametros) {
        }
        else {
            return responseParamentros.status(400).send({ mensaje: "no envia parametros", status: 400 });
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
UsuarioController = __decorate([
    common_1.Controller("Usuario")
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map