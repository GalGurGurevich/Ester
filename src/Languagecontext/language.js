import React, { useState, createContext, useContext } from 'react'

import { languageOptions, langDictionaryList } from '../Theme/index.js'

// create the language context with default selected language
export const LanguageContext = createContext({
    language: languageOptions[0],
    dictionary: langDictionaryList[languageOptions[0].id],
    direction: languageOptions[0].dir
  });
  
  // it provides the language context to app
  export function LanguageProvider(props) {
    const languageContext = useContext(LanguageContext);
    const [language, setLanguage] = useState(languageContext.language);
    const [dictionary, setDictionary] = useState(languageContext.dictionary);
  
    const provider = {
      language,
      dictionary,
      setLanguage: (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setDictionary(langDictionaryList[selectedLanguage.id]);
      },
      setDirection: () => {
        document.documentElement.dir = languageContext.direction;
      }
    };
  
    return (
      <LanguageContext.Provider value={provider}>
        {props.children}
      </LanguageContext.Provider>
    );
  };

  export function Text(props) {
    const languageContext = useContext(LanguageContext);
  
    return languageContext.dictionary[props.tid];
  };
