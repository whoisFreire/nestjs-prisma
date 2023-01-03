import { Body, Controller, Post } from '@nestjs/common';
import { insertPetDTO } from './dtos/insert-pet-dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post('insert')
  async insert(@Body() data: insertPetDTO): Promise<void> {
    await this.petService.insertPet(data);
  }
}
