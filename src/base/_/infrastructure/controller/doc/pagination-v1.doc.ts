import { ApiPropertyOptions } from '@nestjs/swagger';

class PaginationV1Doc {
  public static itemsProperty: ApiPropertyOptions = {
    name: 'items',
    title: 'items',
    description: 'Itens da página.',
    type: () => Object,
    isArray: true,
    required: true,
  };

  public static currentPageProperty: ApiPropertyOptions = {};

  public static totalPageProperty: ApiPropertyOptions = {};

  public static totalItemsProperty: ApiPropertyOptions = {};

  public static limitProperty: ApiPropertyOptions = {};
}

export default PaginationV1Doc;
