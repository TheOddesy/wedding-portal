import React, {useContext, useRef} from 'react';
import {LanguageContext} from '../Store/LanguageContext';
import LanguageToggler from './LanguageToggler';
import SideBar from './SideBar';
import './MainPage.css';
import './SideBar.css';
import './LanguageToggler.css';

const MainPage = () => {
  const {languageData} = useContext(LanguageContext);
  const zero = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mainPage'>
      <SideBar
        scrollToSection={scrollToSection}
        zero={zero}
        one={one}
        two={two}
        three={three}
        four={four}
      />
      <LanguageToggler />
      <div className='smallSite'>{languageData.smallsite}</div>

      <div ref={zero} className='bigSite'>
        <div className='titleWrapper'>
          <div className='masqualero mainTitle'>{languageData.nicolas}</div>
          <div className='cormorant mainTitleAnd'>{languageData.and}</div>
          <div className='masqualero mainTitle'>{languageData.lovisa}</div>
        </div>

        <div className='spaceForTesting'></div>

        <div ref={one} className='cormorant secondaryTitle'>
          {languageData.subtitle1}
        </div>
        <div className='sourceSans'>{languageData.text}</div>
        <div className='spaceForTesting'></div>

        <div ref={two} className='cormorant secondaryTitle'>
          {languageData.subtitle2}
        </div>
        <div className='sourceSans'>{languageData.text}</div>
        <div className='spaceForTesting'></div>

        <div ref={three} className='cormorant secondaryTitle'>
          {languageData.subtitle3}
        </div>
        <div className='sourceSans'>{languageData.text}</div>
        <div className='spaceForTesting'></div>

        <div ref={four} className='cormorant secondaryTitle'>
          {languageData.subtitle4}
        </div>
        <div className='sourceSans'>{languageData.text}</div>
        <div className='spaceForTesting'></div>
      </div>
    </div>
  );
};

export default MainPage;

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
