import { Test, TestingModule } from '@nestjs/testing';
import { GastoclienteController } from './gastocliente.controller';

describe('GastoclienteController', () => {
  let controller: GastoclienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GastoclienteController],
    }).compile();

    controller = module.get<GastoclienteController>(GastoclienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
