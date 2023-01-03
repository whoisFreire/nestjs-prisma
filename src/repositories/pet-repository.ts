export abstract class PetRepository {
  abstract create(name: string, breed: string): Promise<void>;
}
