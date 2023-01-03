import { Injectable } from '@nestjs/common';
import { Pet } from '@prisma/client';
import { PetRepository } from 'src/repositories/pet-repository';
import { insertPetDTO } from './dtos/insert-pet-dto';

@Injectable()
export class PetService {
  constructor(private readonly petRepository: PetRepository) {}

  async insertPet(data: insertPetDTO): Promise<void> {
    const { name, breed } = data;
    await this.petRepository.create(name, breed);
  }

  async findAll(): Promise<Pet[]> {
    const pets = await this.petRepository.showAll();
    return pets;
  }
}
