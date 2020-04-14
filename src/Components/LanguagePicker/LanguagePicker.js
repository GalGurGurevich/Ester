
import React from 'react';
import { useLanguage } from '../../Languages/context';
import './LanguagePicker.css'

// A basic language picker control to change the language
export function LanguagePicker() {
  // These are the values returned by the provider
  const { language, availableLanguages, setLanguage } = useLanguage();
  return (
    <select className="selector" value={language} onChange={e => setLanguage(e.target.value)}>
      { availableLanguages.map(({ code, title }) => <option key={code} value={code}>{title}</option>) }
    </select>
  );
}

export default LanguagePicker;
