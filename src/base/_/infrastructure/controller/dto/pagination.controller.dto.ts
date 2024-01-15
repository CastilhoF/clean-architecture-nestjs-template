import PaginationDto from '../../../application/dto/pagination.dto';
import { Expose } from 'class-transformer';
import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import PaginationV1Doc from '../doc/pagination-v1.doc';

class PaginationControllerDto<TEntity> implements PaginationDto<TEntity> {
  @IsArray()
  @Expose({ name: 'items', toPlainOnly: true })
  @ApiProperty(PaginationV1Doc.itemsProperty)
  readonly items: TEntity[];

  @Expose({ name: 'current_page', toPlainOnly: true })
  @ApiProperty(PaginationV1Doc.currentPageProperty)
  readonly currentPage: number;

  @Expose({ name: 'limit_items', toPlainOnly: true })
  @ApiProperty(PaginationV1Doc.limitProperty)
  readonly limitItems: number;

  @Expose({ name: 'total_items', toPlainOnly: true })
  @ApiProperty(PaginationV1Doc.totalItemsProperty)
  readonly totalItems: number;

  @Expose({ name: 'total_pages', toPlainOnly: true })
  @ApiProperty(PaginationV1Doc.totalPageProperty)
  readonly totalPages: number;

  constructor(
    items: TEntity[],
    currentPage: number,
    limitItems: number,
    totalItems: number,
    totalPages: number,
  ) {
    this.items = items;
    this.currentPage = currentPage;
    this.limitItems = limitItems;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }
}

export default PaginationControllerDto;
