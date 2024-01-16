import React, {useContext, useRef} from 'react';
import {LanguageContext} from '../Store/LanguageContext';
import LanguageToggler from './LanguageToggler';
import SideBar from './SideBar';
import FormButton from './FormButton';
import './MainPage.css';
import './SideBar.css';
import './LanguageToggler.css';
import './FormButton.css';
import titlePicture from '../assets/IMG_0069.JPG';

const MainPage = () => {
  const {languageData} = useContext(LanguageContext);
  const zero = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mainPage'>
      <div ref={zero} className='site'>
        {/* LANGUAGE AND SIDEBAR ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <LanguageToggler />
        <SideBar
          scrollToSection={scrollToSection}
          zero={zero}
          one={one}
          two={two}
          three={three}
          four={four}
          five={five}
        />
        {/* INTRODUCTION ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div className='titlePictureWrapper'>
          <div className='titleWrapper'>
            <div className='masqualero mainTitle titleNicolas'>{languageData.nicolas}</div>
            <div className='cormorant mainTitleAnd titleAnd'>{languageData.and}</div>
            <div className='masqualero mainTitle titleLovisa'>{languageData.lovisa}</div>
          </div>
          <div className='pictureTitleWrapper'>
            <img src={titlePicture} alt='The two of us together' className='pictureTitle' />
          </div>
        </div>
        <div className='textWrapper sourceSans'>
          <div className='inline'>{languageData.introduction1} </div>
          <div className='bold inline'>{languageData.introductionDate} </div>
          <div className='inline'>{languageData.introduction2} </div>
          <div className='bold inline'>{languageData.introductionTime}</div>
          <div className='spaceAfterParagraph'></div>
          <div className='inline'>{languageData.introduction3} </div>
          <a href='https://hypoteket.se/' rel='noreferrer' target='_blank' className='bold inline'>
            {languageData.introductionAdress}
          </a>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.introduction4}</div>
          <div className='spaceAfterParagraph'></div>
          <div className='inline'>{languageData.introduction5} </div>
          <div className='inline bold'>{languageData.introductionRSVP} </div>
          <div className='inline'>{languageData.introduction6}</div>
        </div>
        <FormButton></FormButton>
        <div className='spaceBetweenChapters'></div>
        {/* TOATMASTER ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={one} className='cormorant secondaryTitle'>
          {languageData.subtitleToastmaster}
        </div>
        <div className='textWrapper sourceSans'>
          <div className=''>{languageData.toastmaster1}</div>
          <div className='spaceAfterParagraph'></div>
          <div className='inline'>{languageData.toastmaster2} </div>
          <div className='inline bold'>{languageData.toastmasterMail}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        {/* DRESSCODE ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={two} className='cormorant secondaryTitle'>
          {languageData.subtitleDressCode}
        </div>
        <div className='textWrapper sourceSans'>
          <div className=''>{languageData.dressCode}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        {/* LIVING ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={three} className='cormorant secondaryTitle'>
          {languageData.subtitleLiving}
        </div>
        <div className='textWrapper sourceSans'>
          <div className='inline'>{languageData.living1} </div>
          <a href='https://www.lundia.se/' rel='noreferrer' target='_blank' className='inline bold'>
            Hotel Lundia
          </a>
          <div className='inline'> {languageData.living2} </div>
          <a
            href='https://www.grandilund.se/'
            rel='noreferrer'
            target='_blank'
            className='inline bold'>
            Grand Hotell
          </a>
          <div className='inline'> {languageData.living3}</div>
          <div className='spaceAfterParagraph'></div>
          <div className='inline'>{languageData.living4} </div>
          <div className='inline bold'>{languageData.livingMail}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        {/* WEDDING GIFTS----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={four} className='cormorant secondaryTitle'>
          {languageData.subtitleGift}
        </div>
        <div className='textWrapper sourceSans'>
          <div className=''>{languageData.gift1}</div>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.gift2}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        {/* ABOUT US----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={five} className='cormorant secondaryTitle'>
          {languageData.subtitleAboutUs}
        </div>
        <div className='textWrapper sourceSans'>
          <div className=''>{languageData.aboutUs1}</div>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.aboutUs2}</div>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.aboutUs3}</div>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.aboutUs4}</div>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.aboutUs5}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        <div className='timelineWrapper sourceSans'>
          <div className='timelineLine'></div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
          <div className='textWrapperTimeline textOne'>{languageData.timeline1}</div>
          <div className='pictureWrapper pictureOne'>
            <img src={titlePicture} alt='The two of us together' className='picture' />
          </div>
          <div className='pictureWrapper pictureTwo'>
            <img src={titlePicture} alt='The two of us together' className='picture' />
          </div>
          <div className='pictureWrapper pictureThree'>
            <img src={titlePicture} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}

          <div className='textWrapperTimeline marginOnTopOfText textTwo'>
            {languageData.timeline2}
          </div>
          <div className='pictureWrapper pictureFour'>
            <img src={titlePicture} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}

          <div className='textWrapperTimeline marginOnTopOfText textThree'>
            {languageData.timeline3}
          </div>
          <div className='pictureWrapper pictureFive'>
            <img src={titlePicture} alt='The two of us together' className='picture' />
          </div>
          <div className='pictureWrapper pictureSix'>
            <img src={titlePicture} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}

          <div className='textWrapperTimeline marginOnTopOfText textFour'>
            {languageData.timeline4}
          </div>
          <div className='pictureWrapper pictureSeven'>
            <img src={titlePicture} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}

          <div className='textWrapperTimeline marginOnTopOfText textFive'>
            {languageData.timeline5}
          </div>
          <div className='pictureWrapper dottedCircle' />
        </div>
        <div className='spaceBetweenChapters'></div>
      </div>
    </div>
  );
};

export default MainPage;
