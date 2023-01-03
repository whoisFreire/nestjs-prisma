import { Injectable } from '@nestjs/common';
import { Pet } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PetRepository } from '../pet-repository';

@Injectable()
export class PrismaPetRepository implements PetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async showAll(): Promise<Pet[]> {
    return await this.prisma.pet.findMany();
  }

  async create(name: string, breed: string): Promise<void> {
    await this.prisma.pet.create({
      data: {
        name,
        breed,
      },
    });
  }
}
