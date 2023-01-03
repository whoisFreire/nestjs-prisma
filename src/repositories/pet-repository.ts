import { Pet } from '@prisma/client';

export abstract class PetRepository {
  abstract create(name: string, breed: string): Promise<void>;

  abstract showAll(): Promise<Pet[]>;
}
