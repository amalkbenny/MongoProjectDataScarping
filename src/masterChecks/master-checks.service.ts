import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MasterChecks, MasterChecksDocument } from './schemas/master-checks.schema';
import { CreateMasterChecksDto } from './dto/create-master-checks.dto';

@Injectable()
export class MasterChecksService {
  constructor(
    @InjectModel(MasterChecks.name)
    private masterChecksModel: Model<MasterChecksDocument>,
  ) {}

  async create(createMasterChecksDto: CreateMasterChecksDto): Promise<MasterChecks> {
    if(createMasterChecksDto) {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() - createMasterChecksDto.timeFrame);
      const dataFound = await this.masterChecksModel.findOne({
        job: createMasterChecksDto.job, 
        country: createMasterChecksDto.country, 
        searchTerm: createMasterChecksDto.searchTerm, 
        scrapedAt: {$gte: newDate}
      });
      
      if(dataFound) {
        throw new HttpException({
          status: HttpStatus.CONFLICT,
          error: 'Data already exists for this job, country, and search term within the specified time frame',
          timestamp: new Date().toISOString()
        }, HttpStatus.CONFLICT);
      }
    }

    const createdData = new this.masterChecksModel(createMasterChecksDto);
    return createdData.save();
  }

  // async findAll(): Promise<MasterChecks[]> {
  //   return this.masterChecksModel.find().exec();
  // }

  // async findOne(id: string): Promise<MasterChecks> {
  //   return this.masterChecksModel.findById(id).exec();
  // }

  // async update(
  //   id: string,
  //   updateMasterChecksDto: CreateMasterChecksDto,
  // ): Promise<MasterChecks> {
  //   return this.masterChecksModel
  //     .findByIdAndUpdate(id, updateMasterChecksDto, { new: true })
  //     .exec();
  // }

  // async remove(id: string): Promise<MasterChecks> {
  //   return this.masterChecksModel.findByIdAndDelete(id).exec();
  // }

  // async findByTags(tags: string[]): Promise<MasterChecks[]> {
  //   return this.masterChecksModel
  //     .find({ tags: { $in: tags } })
  //     .exec();
  // }
} 