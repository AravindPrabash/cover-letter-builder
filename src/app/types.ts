import { Dispatch, SetStateAction } from 'react';

export type URIKey = 'SHOP' | 'HOME' | 'CONTACTS';

export type URIList = {
  [key in URIKey]: string;
}

export type Navlink = {
  name: string;
  link: string;
}

export type Theme = 'light' | 'dark';
export type UseDarkSideReturn = [Theme, Dispatch<SetStateAction<Theme>>];