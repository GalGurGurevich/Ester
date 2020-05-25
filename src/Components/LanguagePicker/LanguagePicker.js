import React from 'react';
import { useLanguage } from '../../Languages/context';
import Select from '../Select/Select'

export function LanguagePicker() {
  const { language, availableLanguages, setLanguage } = useLanguage();
  const languageOptions = availableLanguages.map(({ code, title }) => ({ value: code, text: title }))
  return (
      <Select options={languageOptions} value={language} onChange={setLanguage}/>
  );
}

export default LanguagePicker;
