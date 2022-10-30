import { Test, TestingModule } from '@nestjs/testing';
import { GastoclienteService } from './gastocliente.service';

describe('GastoclienteService', () => {
  let service: GastoclienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GastoclienteService],
    }).compile();

    service = module.get<GastoclienteService>(GastoclienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
