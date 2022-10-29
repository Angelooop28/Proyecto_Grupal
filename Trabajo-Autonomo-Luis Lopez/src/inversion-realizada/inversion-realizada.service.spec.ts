import { Test, TestingModule } from '@nestjs/testing';
import { InversionRealizadaService } from './inversion-realizada.service';

describe('InversionRealizadaService', () => {
  let service: InversionRealizadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InversionRealizadaService],
    }).compile();

    service = module.get<InversionRealizadaService>(InversionRealizadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
