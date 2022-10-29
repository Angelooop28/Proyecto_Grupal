import { Test, TestingModule } from '@nestjs/testing';
import { InversionesRealizadasService } from './inversiones-realizadas.service';

describe('InversionesRealizadasService', () => {
  let service: InversionesRealizadasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InversionesRealizadasService],
    }).compile();

    service = module.get<InversionesRealizadasService>(
      InversionesRealizadasService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
