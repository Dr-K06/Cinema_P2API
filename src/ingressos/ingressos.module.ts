import { Module } from '@nestjs/common';
import { IngressosController } from './ingressos.controller';
import { IngressosService } from './ingressos.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IngressosController],
  providers: [IngressosService],
})
export class IngressosModule {}