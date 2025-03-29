import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsObject } from 'class-validator';

export class CreateLogDto {
  @ApiProperty({ description: 'The log message' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ description: 'The log level (e.g., info, error, warn)' })
  @IsString()
  @IsNotEmpty()
  level: string;

  @ApiProperty({ description: 'Additional metadata for the log', required: false })
  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;
} 