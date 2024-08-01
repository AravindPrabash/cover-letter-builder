export type URIKey = 'SHOP' | 'HOME' | 'CONTACTS';

export type URIList = {
  [key in URIKey]: string;
}

export type Navlink = {
  name: string;
  link: string;
}