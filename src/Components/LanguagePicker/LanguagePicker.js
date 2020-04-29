import React from 'react';
import { useLanguage } from '../../Languages/context';
import './LanguagePicker.css'
import Select from '../Select/Select'

// A basic language picker control to change the language
export function LanguagePicker() {
  // These are the values returned by the provider
  const { language, availableLanguages, setLanguage } = useLanguage();
  const languageOptions = availableLanguages.map(({ code, title }) => ({ value: code, text: title }))
  return (
      <Select options={languageOptions} value={language} onChange={setLanguage}/>
  );
}

export default LanguagePicker;
