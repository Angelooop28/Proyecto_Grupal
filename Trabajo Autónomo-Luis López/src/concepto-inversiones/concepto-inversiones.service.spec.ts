import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoInversionesService } from './concepto-inversiones.service';

describe('ConceptoInversionesService', () => {
  let service: ConceptoInversionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptoInversionesService],
    }).compile();

    service = module.get<ConceptoInversionesService>(ConceptoInversionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
