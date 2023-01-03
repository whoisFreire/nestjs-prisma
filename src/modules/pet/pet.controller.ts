import { Body, Controller, Get, Post } from '@nestjs/common';
import { Pet } from '@prisma/client';
import { insertPetDTO } from './dtos/insert-pet-dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post('insert')
  async insert(@Body() data: insertPetDTO): Promise<void> {
    try {
      await this.petService.insertPet(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  @Get()
  async show(): Promise<Pet[]> {
    try {
      const pets = await this.petService.findAll();
      return pets;
    } catch (err) {
      throw new Error(err);
    }
  }
}
