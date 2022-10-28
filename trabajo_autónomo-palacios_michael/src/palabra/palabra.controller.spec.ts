import { Test, TestingModule } from '@nestjs/testing';
import { PalabraController } from './palabra.controller';

describe('PalabraController', () => {
  let controller: PalabraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalabraController],
    }).compile();

    controller = module.get<PalabraController>(PalabraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
