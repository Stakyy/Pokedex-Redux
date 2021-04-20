export interface Link {
  nextUrl: string | null;
}

export enum LinkActionTypes {
  SET_NEXT_URL = 'SET_NEXT_URL',
}

interface nextUrl {
  type: LinkActionTypes.SET_NEXT_URL;
}
