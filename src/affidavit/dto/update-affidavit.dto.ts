import { PartialType } from '@nestjs/mapped-types';
import { CreateAffidavitDto } from './create-affidavit.dto';

export class UpdateAffidavitDto extends PartialType(CreateAffidavitDto) {}
