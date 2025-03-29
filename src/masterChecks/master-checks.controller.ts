import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MasterChecksService } from './master-checks.service';
import { CreateMasterChecksDto } from './dto/create-master-checks.dto';
import { MasterChecks } from './schemas/master-checks.schema';

@ApiTags('master-checks')
@Controller('scraped-master-checks')
export class MasterChecksController {
  constructor(private readonly masterChecksService: MasterChecksService) {}

  @Post()
  @ApiOperation({ summary: 'Create new scraped data' })
  @ApiResponse({ status: 201, description: 'The scraped data has been successfully created.' })
  create(@Body() createMasterChecksDto: CreateMasterChecksDto): Promise<MasterChecks> {
    return this.masterChecksService.create(createMasterChecksDto);
  }

  // @Get()
  // @ApiOperation({ summary: 'Get all scraped data' })
  // @ApiResponse({ status: 200, description: 'Return all scraped data.' })
  // findAll(): Promise<MasterChecks[]> {
  //   return this.masterChecksService.findAll();
  // }

  // @Get('search')
  // @ApiOperation({ summary: 'Search scraped data by tags' })
  // @ApiResponse({ status: 200, description: 'Return scraped data matching the tags.' })
  // findByTags(@Query('tags') tags: string[]): Promise<MasterChecks[]> {
  //   return this.masterChecksService.findByTags(tags);
  // }

  // @Get(':id')
  // @ApiOperation({ summary: 'Get scraped data by id' })
  // @ApiResponse({ status: 200, description: 'Return the scraped data.' })
  // findOne(@Param('id') id: string): Promise<MasterChecks> {
  //   return this.masterChecksService.findOne(id);
  // }

  // @Patch(':id')
  // @ApiOperation({ summary: 'Update scraped data' })
  // @ApiResponse({ status: 200, description: 'The scraped data has been successfully updated.' })
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMasterChecksDto: CreateMasterChecksDto,
  // ): Promise<MasterChecks> {
  //   return this.masterChecksService.update(id, updateMasterChecksDto);
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'Delete scraped data' })
  // @ApiResponse({ status: 200, description: 'The scraped data has been successfully deleted.' })
  // remove(@Param('id') id: string): Promise<MasterChecks> {
  //   return this.masterChecksService.remove(id);
  // }
} 