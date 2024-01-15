import { RequestMethod } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';

class RoutesProvider {
  public static applyFor(): RouteInfo[] {
    const config: RouteInfo[] = [
      {
        path: 'admin/blockchain',
        method: RequestMethod.ALL,
      },
      {
        path: 'admin/cart',
        method: RequestMethod.ALL,
      },
      {
        path: 'admin/category',
        method: RequestMethod.ALL,
      },
      {
        path: 'admin/collection',
        method: RequestMethod.ALL,
      },
      {
        path: 'admin/nft',
        method: RequestMethod.ALL,
      },
      {
        path: 'admin/order',
        method: RequestMethod.ALL,
      },
      {
        path: 'admin/project',
        method: RequestMethod.ALL,
      },
      {
        path: 'admin/wallet',
        method: RequestMethod.ALL,
      },
    ];

    return config;
  }
}

export default RoutesProvider;
