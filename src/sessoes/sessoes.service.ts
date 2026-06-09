import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateSessoeDto } from './dto/create-sessoe.dto';
import { UpdateSessoeDto } from './dto/update-sessoe.dto';

@Injectable()
export class SessoesService {
  constructor(private prisma: PrismaService) {}

  create(createSessoeDto: CreateSessoeDto) {
    return this.prisma.sessao.create({
      data: {
        data: new Date(createSessoeDto.data),
        preco: createSessoeDto.preco,
        idioma: createSessoeDto.idioma,
        formato: createSessoeDto.formato,
        filmeId: createSessoeDto.filmeId,
        salaId: createSessoeDto.salaId,
      },
    });
  }

  findAll() {
    return this.prisma.sessao.findMany({
      include: {
        filme: true,
        sala: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.sessao.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSessoeDto: UpdateSessoeDto) {
    return this.prisma.sessao.update({
      where: { id },
      data: updateSessoeDto,
    });
  }

  remove(id: number) {
    return this.prisma.sessao.delete({
      where: { id },
    });
  }
}