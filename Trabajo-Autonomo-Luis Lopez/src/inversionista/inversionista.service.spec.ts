import { Test, TestingModule } from '@nestjs/testing';
import { InversionistaService } from './inversionista.service';

describe('InversionistaService', () => {
  let service: InversionistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InversionistaService],
    }).compile();

    service = module.get<InversionistaService>(InversionistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
