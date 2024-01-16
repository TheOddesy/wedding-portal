import {useContext} from 'react';
import {LanguageContext} from '../Store/LanguageContext';

const SideBar = ({scrollToSection, zero, one, two, three, four, five}) => {
  const {languageData} = useContext(LanguageContext);
  return (
    <div className='sideBar'>
      <div className='verticalLine'></div>
      <div className='menuItemsWrapper'>
        <div onClick={() => scrollToSection(zero)} className='menuItem'>
          <div className='tooltip sourceSans'>{languageData.home}</div>
        </div>
        <div onClick={() => scrollToSection(one)} className='menuItem'>
          <div className='tooltip sourceSans'>{languageData.subtitleToastmaster}</div>
        </div>
        <div onClick={() => scrollToSection(two)} className='menuItem'>
          <div className='tooltip sourceSans'>{languageData.subtitleDressCode}</div>
        </div>
        <div onClick={() => scrollToSection(three)} className='menuItem'>
          <div className='tooltip sourceSans'>{languageData.subtitleLiving}</div>
        </div>
        <div onClick={() => scrollToSection(four)} className='menuItem'>
          <div className='tooltip sourceSans'>{languageData.subtitleGift}</div>
        </div>
        <div onClick={() => scrollToSection(five)} className='menuItem'>
          <div className='tooltip sourceSans'>{languageData.subtitleAboutUs}</div>
        </div>
      </div>
      <div className='verticalLine'></div>
    </div>
  );
};

export default SideBar;
