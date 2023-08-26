import { Test, TestingModule } from '@nestjs/testing';
import { AffidavitController } from './affidavit.controller';
import { AffidavitService } from './affidavit.service';

describe('AffidavitController', () => {
  let controller: AffidavitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AffidavitController],
      providers: [AffidavitService],
    }).compile();

    controller = module.get<AffidavitController>(AffidavitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
