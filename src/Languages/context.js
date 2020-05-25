import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, availableLanguages } from '../../src/Theme/i18n';

const LanguageContext = createContext({});

// This is a shorthand instead of having to export the context object
export function useLanguage() {
    return useContext(LanguageContext);
}

export function LanguageProvider({ defaultLanguage, children }) {
    // Whenever the LanguageProvider is used, a defaultLanguage can be specified
    // if it's missing, it is defined by the document, or defaults to hebrew
    const initialLanguage = (localStorage && localStorage.getItem('preferredLanguage')) || defaultLanguage || document.documentElement.lang || 'he';

    // This useState is used to store the current language
    const [language, setLanguage] = useState(initialLanguage in languages ? initialLanguage : 'he');

    // This effect will be executed every time the language state changes
    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = languages[language].dir;
        localStorage && localStorage.setItem('preferredLanguage', language);
    }, [language]);

    // Read the direction and resources for the current language
    const { dir, resources } = languages[language];

    // Initialize the provider value with:
    const provider = {
        language, // The currently selected language code
        dir, // The direction of the currently selected language
        resources, // The translations dictionary used by the currently selected language
        availableLanguages, // A list of options for a dropdown to
        setLanguage(language) {
            if (language in languages) setLanguage(language);
        }, // A function to update the language
        translate(term) {
            return term in resources ? resources[term] : term;
        }, // A simple translation function for anyone who just needs a value translated
    };

    return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}
