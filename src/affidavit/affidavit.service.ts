import { Injectable } from '@nestjs/common';
import { CreateAffidavitDto } from './dto/create-affidavit.dto';
import { UpdateAffidavitDto } from './dto/update-affidavit.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AffidavitService {
  constructor(private prismaService: PrismaService) {}
  
  async create(createAffidavitDto: CreateAffidavitDto) {
    return await this.createAffidavit(createAffidavitDto);
  }

  async findAll() {
    return await this.getAllAffidavits();
  }

  async findOne(id: string) {
    return await this.getOneAffidavit(id);
  }

  async update(id: string, updateAffidavitDto: UpdateAffidavitDto) {
    return await this.updateAffidavit(id, updateAffidavitDto);
  }

  async remove(id: string) {
    return await this.deleteAffidavit(id);
  }

  private async createAffidavit(createAffidavitDto: CreateAffidavitDto) {
    return await this.prismaService.affidavit.create({
      data: {
  ...createAffidavitDto
},
select: {
  id: true
}
    })
  }

  private async getAllAffidavits() {
    return await this.prismaService.affidavit.findMany({
      select: {
        id: true,
        right_profile_pic: true,
        left_profile_pic: true,
        fullname: true,
        address: true,
        paragraphs: true,
        date: true,
        from_language: true,
        to_language: true,
        fee_paid: true,
        signature: true
    }})
  }

    private async getOneAffidavit(id: string) {
    return await this.prismaService.affidavit.findFirst({
      where: {
        id: id
      },
     select: {
        id: true,
        right_profile_pic: true,
        left_profile_pic: true,
        fullname: true,
        address: true,
        paragraphs: true,
        date: true,
        from_language: true,
        to_language: true,
        fee_paid: true,
        signature: true
    }})
  }

      private async deleteAffidavit(id: string) {
    return await this.prismaService.affidavit.delete({
      where: {
        id: id
      },
      select: {
        id: true
    }})
  }

  private async updateAffidavit(id: string, updateAffidavitDto: UpdateAffidavitDto) {
    return await this.prismaService.affidavit.update({
      where: {
        id: id
      },
      data: {
       ...updateAffidavitDto
    }, select: {
        id: true
    }})
  }
}
