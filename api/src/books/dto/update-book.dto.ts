import { IsInt, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  isbn?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  totalCopies?: number;

  @IsOptional()
  @IsUUID()
  genreId?: string;
}
