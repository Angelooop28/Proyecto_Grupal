import { Test, TestingModule } from '@nestjs/testing';
import { InversionistasController } from './inversionistas.controller';

describe('InversionistasController', () => {
  let controller: InversionistasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InversionistasController],
    }).compile();

    controller = module.get<InversionistasController>(InversionistasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
