import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BootcampsController } from './bootcamps.controller';
import { Bootcamp } from './entities/bootcamp.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Bootcamp ])],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
