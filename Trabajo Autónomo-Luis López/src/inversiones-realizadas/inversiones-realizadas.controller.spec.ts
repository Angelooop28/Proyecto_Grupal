import { Test, TestingModule } from '@nestjs/testing';
import { InversionesRealizadasController } from './inversiones-realizadas.controller';

describe('InversionesRealizadasController', () => {
  let controller: InversionesRealizadasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InversionesRealizadasController],
    }).compile();

    controller = module.get<InversionesRealizadasController>(
      InversionesRealizadasController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
