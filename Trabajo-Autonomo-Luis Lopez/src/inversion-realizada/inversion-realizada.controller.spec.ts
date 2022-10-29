import { Test, TestingModule } from '@nestjs/testing';
import { InversionRealizadaController } from './inversion-realizada.controller';

describe('InversionRealizadaController', () => {
  let controller: InversionRealizadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InversionRealizadaController],
    }).compile();

    controller = module.get<InversionRealizadaController>(InversionRealizadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
