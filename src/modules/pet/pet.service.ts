import { Injectable } from '@nestjs/common';
import { PetRepository } from 'src/repositories/pet-repository';
import { insertPetDTO } from './dtos/insert-pet-dto';

@Injectable()
export class PetService {
  constructor(private readonly petRepository: PetRepository) {}

  async insertPet(data: insertPetDTO): Promise<void> {
    const { name, breed } = data;
    await this.petRepository.create(name, breed);
  }
}
