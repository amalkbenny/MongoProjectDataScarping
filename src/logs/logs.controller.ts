import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
import { Log } from './schemas/log.schema';

@ApiTags('logs')
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new log' })
  @ApiResponse({ status: 201, description: 'The log has been successfully created.' })
  create(@Body() createLogDto: CreateLogDto): Promise<Log> {
    return this.logsService.create(createLogDto);
  }

  // @Get()
  // @ApiOperation({ summary: 'Get all logs' })
  // @ApiResponse({ status: 200, description: 'Return all logs.' })
  // findAll(): Promise<Log[]> {
  //   return this.logsService.findAll();
  // }

  // @Get(':id')
  // @ApiOperation({ summary: 'Get a log by id' })
  // @ApiResponse({ status: 200, description: 'Return the log.' })
  // findOne(@Param('id') id: string): Promise<Log> {
  //   return this.logsService.findOne(id);
  // }

  // @Patch(':id')
  // @ApiOperation({ summary: 'Update a log' })
  // @ApiResponse({ status: 200, description: 'The log has been successfully updated.' })
  // update(
  //   @Param('id') id: string,
  //   @Body() updateLogDto: CreateLogDto,
  // ): Promise<Log> {
  //   return this.logsService.update(id, updateLogDto);
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'Delete a log' })
  // @ApiResponse({ status: 200, description: 'The log has been successfully deleted.' })
  // remove(@Param('id') id: string): Promise<Log> {
  //   return this.logsService.remove(id);
  // }
} 