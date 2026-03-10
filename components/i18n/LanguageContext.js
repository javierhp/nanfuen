import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import en from '../../public/locales/en.json';
import es from '../../public/locales/es.json';

const translations = { en, es };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const router = useRouter();
  const routeLocale = router.query.locale || 'es';
  const [locale, setLocale] = useState(routeLocale);

  useEffect(() => {
    if (router.query.locale) {
      setLocale(router.query.locale);
    }
  }, [router.query.locale]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
