import en from './en'
import he from './he'

export const languages = {
  en: { resources: en, title: 'English', dir: 'ltr' },
  he: { resources: he, title: 'עברית', dir: 'rtl' }
};

// Just a flat key-value pair that can be used to list the available languages
export const availableLanguages = Object.entries(languages)
  .map(([code, { title }]) => ({ code, title }));


