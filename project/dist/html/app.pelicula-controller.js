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
let AppPeliculaController = class AppPeliculaController {
    constructor() {
        this.peliculas = [];
    }
    mostrarCartelera() {
        return this.peliculas;
    }
    anadirACartelera(parametros) {
        this.peliculas
            .push(new Pelicula(parametros.nombre, parametros.estreno));
        return this.peliculas;
    }
};
__decorate([
    common_1.Get('mostrarCartelera'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppPeliculaController.prototype, "mostrarCartelera", null);
__decorate([
    common_1.Post('mostrarCartelera/:nombre/:estreno'),
    common_1.HttpCode(203),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppPeliculaController.prototype, "anadirACartelera", null);
AppPeliculaController = __decorate([
    common_1.Controller('Pelicula')
], AppPeliculaController);
exports.AppPeliculaController = AppPeliculaController;
class Pelicula {
    constructor(nombre, estreno) {
        this.nombre = nombre;
        this.estreno = estreno;
    }
}
//# sourceMappingURL=app.pelicula-controller.js.map