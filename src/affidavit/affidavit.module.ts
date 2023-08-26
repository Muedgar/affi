import { Module } from '@nestjs/common';
import { AffidavitService } from './affidavit.service';
import { AffidavitController } from './affidavit.controller';

@Module({
  controllers: [AffidavitController],
  providers: [AffidavitService]
})
export class AffidavitModule {}
