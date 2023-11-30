
import React, { useContext } from 'react';
import { LanguageContext } from '../Store/LanguageContext';
import './MainPage.css';

const MainPage = () => {
  const { language,languageData, setLanguage } = useContext(LanguageContext);
  const handleToggleLanguage = () => {
    const newLanguage = language === 'en' ? 'swe' : 'en';
    setLanguage(newLanguage);
  };
  return (
    <div className="mainPage">
      <div className='lanugeTogglerWrapper'></div>
        <button onClick={handleToggleLanguage}>{language}</button>
      
      <div className='smallSite'>{languageData.smallsite}</div>

      <div className='bigSite'>
        <div className="titleWrapper">
          <h1 className="masqualero mainTitle">{languageData.nicolas}</h1>
          <h1 className="cormorant mainTitle">{languageData.and}</h1>
          <h1 className="masqualero mainTitle">{languageData.lovisa}</h1>
        </div>
        <p className="sourceSans">{languageData.text}</p>
        <p className="sourceSans">{languageData.names}</p>
      </div>

    </div>
  );
};

// function MainPage() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           HEJ HEJ.
//         </p>
//         <a
//           className="App-link"
//           href="https://hypoteket.se/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           hypoteket
//         </a>
//       </header>
//     </div>
//   );
// }

export default MainPage;
