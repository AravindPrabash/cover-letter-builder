import { Navlink, URIList } from './types';

export const URI_LIST = {
  SHOP: 'All-Products',
  HOME: '/'
} satisfies Partial<URIList>;


export const NAV_LINKS: Navlink[] = [
  {
    name: 'Home',
    link: URI_LIST.HOME,
  },
  {
    name: 'Shop',
    link: URI_LIST.SHOP,
  }
];