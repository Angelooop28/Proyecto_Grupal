import { Test, TestingModule } from '@nestjs/testing';
import { InversionistaController } from './inversionista.controller';

describe('InversionistaController', () => {
  let controller: InversionistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InversionistaController],
    }).compile();

    controller = module.get<InversionistaController>(InversionistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
