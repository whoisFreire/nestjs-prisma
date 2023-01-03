import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PetRepository } from '../pet-repository';

@Injectable()
export class PrismaPetRepository implements PetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string, breed: string): Promise<void> {
    await this.prisma.pet.create({
      data: {
        name,
        breed,
      },
    });
  }
}
