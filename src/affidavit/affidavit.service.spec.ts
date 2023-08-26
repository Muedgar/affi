import { Test, TestingModule } from '@nestjs/testing';
import { AffidavitService } from './affidavit.service';

describe('AffidavitService', () => {
  let service: AffidavitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffidavitService],
    }).compile();

    service = module.get<AffidavitService>(AffidavitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
