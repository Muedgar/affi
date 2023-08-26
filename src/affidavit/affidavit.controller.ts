import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AffidavitService } from './affidavit.service';
import { CreateAffidavitDto } from './dto/create-affidavit.dto';
import { UpdateAffidavitDto } from './dto/update-affidavit.dto';

@Controller('affidavit')
export class AffidavitController {
  constructor(private readonly affidavitService: AffidavitService) {}

  @Post()
  create(@Body() createAffidavitDto: CreateAffidavitDto) {
    return this.affidavitService.create(createAffidavitDto);
  }

  @Get()
  findAll() {
    return this.affidavitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affidavitService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAffidavitDto: UpdateAffidavitDto) {
    return this.affidavitService.update(id, updateAffidavitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affidavitService.remove(id);
  }
}
