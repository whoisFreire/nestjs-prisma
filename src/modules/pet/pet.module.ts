import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PetRepository } from 'src/repositories/pet-repository';
import { PrismaPetRepository } from 'src/repositories/prisma/prisma-pet-repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [PetController],
  providers: [
    PetService,
    PrismaService,
    {
      provide: PetRepository,
      useClass: PrismaPetRepository,
    },
  ],
})
export class PetModule {}
