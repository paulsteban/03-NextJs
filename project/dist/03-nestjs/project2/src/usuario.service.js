"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let UsuarioService = class UsuarioService {
    constructor() {
        this.arregloUsuarios = [];
    }
    agregarUsuario(usuario) {
        this.arregloUsuarios.push(usuario);
        return this.arregloUsuarios;
    }
    borrarUsuario(usuario) {
        const indice = this.arregloUsuarios
            .findIndex((usuarioObjeto) => usuarioObjeto === usuario);
        this.arregloUsuarios.slice(indice, 1);
        return this.arregloUsuarios;
    }
};
UsuarioService = __decorate([
    common_1.Component()
], UsuarioService);
exports.UsuarioService = UsuarioService;
class Usuario {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.service.js.map