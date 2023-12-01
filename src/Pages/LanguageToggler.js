import React, {useContext} from 'react';
import {LanguageContext} from '../Store/LanguageContext';

const LanguageToggler = () => {
  const {language, languageData, setLanguage} = useContext(LanguageContext);
  const handleToggleLanguage = () => {
    const newLanguage = language === 'en' ? 'swe' : 'en';
    setLanguage(newLanguage);
  };
  return (
    <div className='lanugeTogglerWrapper'>
      <label className='switch'>
        <input type='checkbox' onClick={handleToggleLanguage} />
        <span className='slider round'></span>
      </label>
      <div className='languageChange sourceSans'>{languageData.languageChange}</div>
    </div>
  );
};

export default LanguageToggler;
