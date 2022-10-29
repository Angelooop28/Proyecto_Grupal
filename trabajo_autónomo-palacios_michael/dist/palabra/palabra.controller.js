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
exports.PalabraController = void 0;
const common_1 = require("@nestjs/common");
const palabra_dto_1 = require("./dto/palabra.dto");
const palabra_service_1 = require("./palabra.service");
let PalabraController = class PalabraController {
    constructor(palabraService) {
        this.palabraService = palabraService;
    }
    async createPost(res, createpalabraDTO) {
        const palabra = await this.palabraService.createPalabra(createpalabraDTO);
        res.status(common_1.HttpStatus.OK).json({
            message: 'recibida palabra',
            palabra: palabra
        });
    }
    async getPalabras(res) {
        const palabras = await this.palabraService.getPalabras();
        res.status(common_1.HttpStatus.OK).json({
            palabras: palabras
        });
    }
    async getPalabra(res, palabraID) {
        const palabra = await this.palabraService.getPalabra(palabraID);
        if (!palabra)
            throw new common_1.NotFoundException('Palabra no existe');
        return res.status(common_1.HttpStatus.OK).json(palabra);
    }
    async deletePalabra(res, palabraID) {
        const palabraDeleted = await this.palabraService.deletePalabra(palabraID);
        if (!palabraDeleted)
            throw new common_1.NotFoundException('Palabra no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Palabra eliminada',
            palabraDeleted
        });
    }
    async updatedPalabra(res, createPalabraDTO, palabraID) {
        const updatedPalabra = await this.palabraService.updatePalabra(palabraID, createPalabraDTO);
        if (!updatedPalabra)
            throw new common_1.NotFoundException('Palabra no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Palabra actualizada',
            updatedPalabra: updatedPalabra
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, palabra_dto_1.CreatepalabraDTO]),
    __metadata("design:returntype", Promise)
], PalabraController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PalabraController.prototype, "getPalabras", null);
__decorate([
    (0, common_1.Get)('/:palabraID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('palabraID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PalabraController.prototype, "getPalabra", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('palabraID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PalabraController.prototype, "deletePalabra", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('palabraID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, palabra_dto_1.CreatepalabraDTO, Object]),
    __metadata("design:returntype", Promise)
], PalabraController.prototype, "updatedPalabra", null);
PalabraController = __decorate([
    (0, common_1.Controller)('palabra'),
    __metadata("design:paramtypes", [palabra_service_1.PalabraService])
], PalabraController);
exports.PalabraController = PalabraController;
//# sourceMappingURL=palabra.controller.js.map