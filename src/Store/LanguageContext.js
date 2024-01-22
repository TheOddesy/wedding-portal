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
    const dataUrl = `http://nicolaslovisa.wedding/Languages/${language}.json`;
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
// const dataUrl = `http://localhost:3000/wedding-portal/Languages/${language}.json`;
// const dataUrl = `https://theoddesy.github.io/wedding-portal/Languages/${language}.json`;
// const dataUrl = `http://www.nicolaslovisa.wedding/Languages/${language}.json`;
