"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var fs = require('fs');
var contador = 0;
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.root = function () {
        console.log('Entro al metodo');
        contador++;
        var datosArchivo;
        var html = fs.readFileSync(__dirname + '/html/Index.html', 'utf8');
        html = html.replace('{{variable}}', contador);
        return html; // contenido o un error
    };
    __decorate([
        common_1.Get()
    ], AppController.prototype, "root", null);
    AppController = __decorate([
        common_1.Controller()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
