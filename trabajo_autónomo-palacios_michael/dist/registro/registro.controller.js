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
exports.RegistroController = void 0;
const common_1 = require("@nestjs/common");
const registro_dto_1 = require("./dto/registro.dto");
const registro_service_1 = require("./registro.service");
let RegistroController = class RegistroController {
    constructor(registroService) {
        this.registroService = registroService;
    }
    async createPost(res, createregistroDTO) {
        const registro = await this.registroService.createRegistro(createregistroDTO);
        res.status(common_1.HttpStatus.OK).json({
            message: ' Registro recibido ',
            registro: registro
        });
    }
    async getRegistros(res) {
        const registros = await this.registroService.getRegistros();
        return res.status(common_1.HttpStatus.OK).json({
            registros
        });
    }
    async getRegistro(res, registroID) {
        const registro = await this.registroService.getRegistro(registroID);
        if (!registro)
            throw new common_1.NotFoundException('Registro No existe');
        return res.status(common_1.HttpStatus.OK).json(registro);
    }
    async deleteRegistro(res, registroID) {
        const RegistroDeleted = await this.registroService.deleteRegistro(registroID);
        if (!RegistroDeleted)
            throw new common_1.NotFoundException('Registro No existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Producto eliminado',
            RegistroDeleted
        });
    }
    async updaeRegistro(res, createregistroDTO, registroID) {
        const updatedRegistro = await this.registroService.updateRegistro(registroID, createregistroDTO);
        if (!updatedRegistro)
            throw new common_1.NotFoundException('Registro No existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Registro Actualizado',
            updatedRegistro
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, registro_dto_1.CreatepalabraDTO]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "getRegistros", null);
__decorate([
    (0, common_1.Get)('/:registroID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('registroID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "getRegistro", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('registroID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "deleteRegistro", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('registroID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, registro_dto_1.CreatepalabraDTO, Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "updaeRegistro", null);
RegistroController = __decorate([
    (0, common_1.Controller)('registro'),
    __metadata("design:paramtypes", [registro_service_1.RegistroService])
], RegistroController);
exports.RegistroController = RegistroController;
//# sourceMappingURL=registro.controller.js.map