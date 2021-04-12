import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class PositionDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  lat: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  lng: number;
}

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;
  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  startPosition: PositionDto;
  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  endPosition: PositionDto;
}
