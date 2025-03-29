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
import { ScrapedDataService } from './scraped-data.service';
import { CreateScrapedDataDto } from './dto/create-scraped-data.dto';
import { ScrapedData } from './schemas/scraped-data.schema';

@ApiTags('scraped-data')
@Controller('scraped-data')
export class ScrapedDataController {
  constructor(private readonly scrapedDataService: ScrapedDataService) {}

  @Post()
  @ApiOperation({ summary: 'Create new scraped data' })
  @ApiResponse({ status: 201, description: 'The scraped data has been successfully created.' })
  create(@Body() createScrapedDataDto: CreateScrapedDataDto): Promise<ScrapedData> {
    return this.scrapedDataService.create(createScrapedDataDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all scraped data' })
  @ApiResponse({ status: 200, description: 'Return all scraped data.' })
  findAll(): Promise<ScrapedData[]> {
    return this.scrapedDataService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Search scraped data by tags' })
  @ApiResponse({ status: 200, description: 'Return scraped data matching the tags.' })
  findByTags(@Query('tags') tags: string[]): Promise<ScrapedData[]> {
    return this.scrapedDataService.findByTags(tags);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get scraped data by id' })
  @ApiResponse({ status: 200, description: 'Return the scraped data.' })
  findOne(@Param('id') id: string): Promise<ScrapedData> {
    return this.scrapedDataService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update scraped data' })
  @ApiResponse({ status: 200, description: 'The scraped data has been successfully updated.' })
  update(
    @Param('id') id: string,
    @Body() updateScrapedDataDto: CreateScrapedDataDto,
  ): Promise<ScrapedData> {
    return this.scrapedDataService.update(id, updateScrapedDataDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete scraped data' })
  @ApiResponse({ status: 200, description: 'The scraped data has been successfully deleted.' })
  remove(@Param('id') id: string): Promise<ScrapedData> {
    return this.scrapedDataService.remove(id);
  }
} 