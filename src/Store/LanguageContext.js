/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useState, useEffect} from 'react';

const LanguageContext = createContext();
const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState('swe');
  const [languageData, setLanguageData] = useState({});
  useEffect(() => {
    fetchLanguageData();
  }, []);
  useEffect(() => {
    fetchLanguageData();
  }, [language]);
  const fetchLanguageData = () => {
    const dataUrl = `http://nicolaslovisa.wedding/languages/${language}.json`;
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setLanguageData(data))
      .catch((error) => console.error('Error fetching language data:', error));
  };
  return (
    <LanguageContext.Provider value={{language, setLanguage, languageData}}>
      {children}
    </LanguageContext.Provider>
  );
};
export {LanguageContext, LanguageProvider};
// const dataUrl = `http://localhost:3000/languages/${language}.json`;
// const dataUrl = `https://theoddesy.github.io/wedding-portal/languages/${language}.json`;
// const dataUrl = `http://nicolaslovisa.wedding/languages/${language}.json`;
