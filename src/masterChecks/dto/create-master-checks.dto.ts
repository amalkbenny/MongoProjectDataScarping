import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, IsObject, IsNumber } from 'class-validator';

export class CreateMasterChecksDto {
  @ApiProperty({ description: 'The title of the scraped content' })
  @IsString()
  @IsNotEmpty()
  job: string;

  @ApiProperty({ description: 'The country where the content was scraped from' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ description: 'The scraped origin', required: false })
  @IsString()
  @IsOptional()
  origin?: string;

  @ApiProperty({ description: 'Tags associated with the content', required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  searchTerm?: string[];

  @ApiProperty({ description: 'The scraped time frame', required: true })
  @IsNumber()
  @IsOptional()
  timeFrame: number;
} 