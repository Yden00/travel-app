import {createContext} from 'react';

export type lang = 'ru' | 'eng';

export const LangContext = createContext<lang>(
  'ru'
)