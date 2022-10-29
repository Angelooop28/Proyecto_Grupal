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
exports.IdiomaController = void 0;
const common_1 = require("@nestjs/common");
const idioma_dto_1 = require("./dto/idioma.dto");
const idioma_service_1 = require("./idioma.service");
let IdiomaController = class IdiomaController {
    constructor(idiomaservice) {
        this.idiomaservice = idiomaservice;
    }
    async createPost(res, createIdiomaDTO) {
        const idioma = await this.idiomaservice.createIdioma(createIdiomaDTO);
        res.status(common_1.HttpStatus.OK).json({
            message: 'Producto Creado',
            idioma: idioma,
        });
    }
    async getIdiomas(res) {
        const idiomas = await this.idiomaservice.getIdiomas();
        return res.status(common_1.HttpStatus.OK).json({
            idiomas: idiomas
        });
    }
    async getIdioma(res, idiomaID) {
        const idioma = await this.idiomaservice.getIdioma(idiomaID);
        if (!idioma)
            throw new common_1.NotFoundException('No hay, no existe!!!');
        return res.status(common_1.HttpStatus.OK).json(idioma);
    }
    async deleteproduct(res, idiomaID) {
        const productDelete = await this.idiomaservice.deleteIdioma(idiomaID);
        if (!productDelete)
            throw new common_1.NotFoundException('Producto no existe');
        return res.status(common_1.HttpStatus.OK).json({ message: 'Producto eliminado',
            productDelete
        });
    }
    async updateproduct(res, createIdiomaDTO, idiomaID) {
        const updateIdioma = await this.idiomaservice.updateIdioma(idiomaID, createIdiomaDTO);
        if (!updateIdioma)
            throw new common_1.NotFoundException('Producto no existe');
        return res.status(common_1.HttpStatus.OK).json({ message: 'Producto actualizado', });
        updateIdioma;
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, idioma_dto_1.CreateIdiomaDTO]),
    __metadata("design:returntype", Promise)
], IdiomaController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IdiomaController.prototype, "getIdiomas", null);
__decorate([
    (0, common_1.Get)('/:idiomaID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('idiomaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IdiomaController.prototype, "getIdioma", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('idiomaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IdiomaController.prototype, "deleteproduct", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('idiomaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, idioma_dto_1.CreateIdiomaDTO, Object]),
    __metadata("design:returntype", Promise)
], IdiomaController.prototype, "updateproduct", null);
IdiomaController = __decorate([
    (0, common_1.Controller)('idioma'),
    __metadata("design:paramtypes", [idioma_service_1.IdiomaService])
], IdiomaController);
exports.IdiomaController = IdiomaController;
//# sourceMappingURL=idioma.controller.js.map