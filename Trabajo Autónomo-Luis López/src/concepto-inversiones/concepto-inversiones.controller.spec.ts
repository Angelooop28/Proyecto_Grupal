import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoInversionesController } from './concepto-inversiones.controller';

describe('ConceptoInversionesController', () => {
  let controller: ConceptoInversionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConceptoInversionesController],
    }).compile();

    controller = module.get<ConceptoInversionesController>(ConceptoInversionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
