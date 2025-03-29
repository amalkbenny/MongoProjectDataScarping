import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsModule } from './logs/logs.module';
import { ScrapedDataModule } from './scraped-data/scraped-data.module';
import { MasterChecksModule } from './masterChecks/master-checks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-demo'),
    LogsModule,
    ScrapedDataModule,
    MasterChecksModule,
  ],
})
export class AppModule {}
