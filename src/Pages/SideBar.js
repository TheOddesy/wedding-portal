import {useContext} from 'react';
import {LanguageContext} from '../Store/LanguageContext';

import {HiOutlineEnvelope} from 'react-icons/hi2';
import {LiaGlassCheersSolid} from 'react-icons/lia';
import {PiDress} from 'react-icons/pi';
import {LiaBedSolid} from 'react-icons/lia';
import {PiGift} from 'react-icons/pi';
import {TbHeartQuestion} from 'react-icons/tb';

const SideBar = ({scrollToSection, zero, one, two, three, four, five}) => {
  const {languageData} = useContext(LanguageContext);
  return (
    <div className='sideBar'>
      <div className='menuItemsWrapper'>
        <div onClick={() => scrollToSection(zero)} className='menuItem'>
          <HiOutlineEnvelope className='icon' />
          <div className='tooltip sourceSans'>{languageData.home}</div>
        </div>
        <div onClick={() => scrollToSection(one)} className='menuItem'>
          <LiaGlassCheersSolid className='icon' />
          <div className='tooltip sourceSans'>{languageData.subtitleToastmaster}</div>
        </div>
        <div onClick={() => scrollToSection(two)} className='menuItem'>
          <PiDress className='icon' />
          <div className='tooltip sourceSans'>{languageData.subtitleDressCode}</div>
        </div>
        <div onClick={() => scrollToSection(three)} className='menuItem'>
          <LiaBedSolid className='icon' />
          <div className='tooltip sourceSans'>{languageData.subtitleLiving}</div>
        </div>
        <div onClick={() => scrollToSection(four)} className='menuItem'>
          <PiGift className='icon' />
          <div className='tooltip sourceSans'>{languageData.subtitleGift}</div>
        </div>
        <div onClick={() => scrollToSection(five)} className='menuItem'>
          <TbHeartQuestion className='icon' />
          <div className='tooltip sourceSans'>{languageData.subtitleAboutUs}</div>
        </div>
      </div>
      <div className='verticalLine'></div>
    </div>
  );
};

export default SideBar;
