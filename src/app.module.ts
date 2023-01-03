import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './modules/pet/pet.module';

@Module({
  imports: [PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
