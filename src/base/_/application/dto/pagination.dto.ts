class PaginationDto<TEntity> {
  readonly items: TEntity[];
  readonly currentPage: number;
  readonly totalPages: number;
  readonly limitItems: number;
  readonly totalItems: number;

  constructor(items: TEntity[], limit: number, offset: number, total: number) {
    if (limit > total) limit = total;
    if (offset > total) offset = total;

    let totalCeil = Math.ceil(total / limit);
    if (totalCeil === 0 || isNaN(totalCeil)) totalCeil = 0;

    this.items = items;
    this.limitItems = limit;
    this.totalItems = total;
    this.currentPage = offset === 0 ? 0 : offset / limit;
    this.totalPages = totalCeil;
  }
}

export default PaginationDto;
