import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MasterChecksService } from './master-checks.service';
import { MasterChecksController } from './master-checks.controller';
import { MasterChecks, MasterChecksSchema } from './schemas/master-checks.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MasterChecks.name, schema: MasterChecksSchema }
    ])
  ],
  controllers: [MasterChecksController],
  providers: [MasterChecksService],
})
export class MasterChecksModule {} 