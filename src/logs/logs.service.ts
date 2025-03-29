import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument } from './schemas/log.schema';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class LogsService {
  constructor(@InjectModel(Log.name) private logModel: Model<LogDocument>) {}

  async create(createLogDto: CreateLogDto): Promise<Log> {
    const createdLog = new this.logModel(createLogDto);
    return createdLog.save();
  }

  async findAll(): Promise<Log[]> {
    return this.logModel.find().exec();
  }

  async findOne(id: string): Promise<Log> {
    return this.logModel.findById(id).exec();
  }

  async update(id: string, updateLogDto: CreateLogDto): Promise<Log> {
    return this.logModel
      .findByIdAndUpdate(id, updateLogDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Log> {
    return this.logModel.findByIdAndDelete(id).exec();
  }
} 