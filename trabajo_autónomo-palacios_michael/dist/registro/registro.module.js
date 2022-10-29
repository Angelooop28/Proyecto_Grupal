"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroModule = void 0;
const common_1 = require("@nestjs/common");
const registro_controller_1 = require("./registro.controller");
const registro_service_1 = require("./registro.service");
const mongoose_1 = require("@nestjs/mongoose");
const registro_shema_1 = require("./schemas/registro.shema");
let RegistroModule = class RegistroModule {
};
RegistroModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: 'Registro', schema: registro_shema_1.RegistroSchema
                }
            ])
        ],
        controllers: [registro_controller_1.RegistroController],
        providers: [registro_service_1.RegistroService]
    })
], RegistroModule);
exports.RegistroModule = RegistroModule;
//# sourceMappingURL=registro.module.js.map