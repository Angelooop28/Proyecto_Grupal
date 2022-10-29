import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoInversionController } from './concepto-inversion.controller';

describe('ConceptoInversionController', () => {
  let controller: ConceptoInversionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConceptoInversionController],
    }).compile();

    controller = module.get<ConceptoInversionController>(ConceptoInversionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
