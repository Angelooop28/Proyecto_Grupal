import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoInversionService } from './concepto-inversion.service';

describe('ConceptoInversionService', () => {
  let service: ConceptoInversionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptoInversionService],
    }).compile();

    service = module.get<ConceptoInversionService>(ConceptoInversionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
