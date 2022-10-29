import { Test, TestingModule } from '@nestjs/testing';
import { InversionistasService } from './inversionistas.service';

describe('InversionistasService', () => {
  let service: InversionistasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InversionistasService],
    }).compile();

    service = module.get<InversionistasService>(InversionistasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
