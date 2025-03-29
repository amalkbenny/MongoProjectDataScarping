import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, IsObject } from 'class-validator';

export class CreateScrapedDataDto {
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

  @ApiProperty({ description: 'The phone number of the company', required: false })
  @IsString()
  @IsOptional()
  phoneNumer?: string;

  @ApiProperty({ description: 'The email of the company', required: false })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({ description: 'The website link of the company', required: false })
  @IsString()
  @IsOptional()
  websiteLink?: string;

  @ApiProperty({ description: 'The name of the company', required: false })
  @IsString()
  @IsOptional()
  companyName?: string;

  @ApiProperty({ description: 'The description of the company', required: false })
  @IsString()
  @IsOptional()
  companyDescription?: string;
} 