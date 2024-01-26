import React, {useContext, useRef} from 'react';
import {LanguageContext} from '../Store/LanguageContext';
import LanguageToggler from './LanguageToggler';
import SideBar from './SideBar';
import FormButton from './FormButton';
import './MainPage.css';
import './SideBar.css';
import './LanguageToggler.css';
import './FormButton.css';
import usa from '../assets/usa.jpg';
import nollning from '../assets/nollning.jpg';
import nollegasque from '../assets/nollegasque.jpg';
import sittning from '../assets/sittning.jpg';
import lund from '../assets/lund.jpg';
import examen from '../assets/examen.jpg';
import flytt from '../assets/flytt.jpg';
import malmo from '../assets/malmo.jpg';
import forlovning from '../assets/forlovning.jpg';
import {LiaKissWinkHeartSolid} from 'react-icons/lia';

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
            <div className='cormorant titleAnd'>{languageData.and}</div>
            <div className='masqualero mainTitle titleLovisa'>{languageData.lovisa}</div>
          </div>
          <div className='pictureTitleWrapper'>
            <img src={usa} alt='The two of us together' className='pictureTitle' />
          </div>
        </div>
        <div className='textWrapper sourceSans'>
          <div className='inline'>{languageData.introduction1} </div>
          <div className='bold inline'>{languageData.introductionDate}</div>
          <div className='spaceAfterParagraph'></div>

          <div className='inline'>{languageData.introduction2} </div>
          <a href='https://hypoteket.se/' rel='noreferrer' target='_blank' className='bold inline'>
            {languageData.introductionAdress}
          </a>
          <div className='inline'> {languageData.introduction3} </div>
          <div className='bold inline'>{languageData.introductionTime}</div>
          <div className='spaceAfterParagraph'></div>

          <div className=''>{languageData.introductionBar}</div>
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
        <div ref={one} className='sourceSans secondaryTitle'>
          {languageData.subtitleToastmaster}
        </div>
        <div className='textWrapper sourceSans'>
          <div className='inline'>{languageData.toastmaster1}</div>
          <div className='inline'> {languageData.toastmaster2} </div>
          <div className='inline bold'>{languageData.toastmasterMail}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        {/* DRESSCODE ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={two} className='sourceSans secondaryTitle'>
          {languageData.subtitleDressCode}
        </div>
        <div className='textWrapper sourceSans'>
          <div className=''>{languageData.dressCode}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        {/* LIVING ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={three} className='sourceSans secondaryTitle'>
          {languageData.subtitleLiving}
        </div>
        <div className='textWrapper sourceSans'>
          <div className='inline'>{languageData.living1} </div>
          <a href='https://www.lundia.se/' rel='noreferrer' target='_blank' className='inline bold'>
            HOTEL LUNDIA
          </a>
          <div className='inline'> {languageData.living2} </div>
          <a
            href='https://www.grandilund.se/'
            rel='noreferrer'
            target='_blank'
            className='inline bold'>
            GRAND HOTEL
          </a>
          <div className='inline'> {languageData.living3}</div>
          <div className='spaceAfterParagraph'></div>
          <div className='inline'>{languageData.living4} </div>
          <div className='inline bold'>{languageData.livingMail}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        {/* WEDDING GIFTS----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={four} className='sourceSans secondaryTitle'>
          {languageData.subtitleGift}
        </div>
        <div className='textWrapper sourceSans'>
          <div className=''>{languageData.gift1}</div>
          <div className='spaceAfterParagraph'></div>
          <div className='inline'>{languageData.gift2} </div>
          <div className='inline bold'>{languageData.gift3}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        {/* ABOUT US----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
        <div ref={five} className='sourceSans secondaryTitle'>
          {languageData.subtitleAboutUs}
        </div>
        <div className='textWrapper sourceSans'>
          <div className=''>{languageData.aboutUs1}</div>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.aboutUs2}</div>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.aboutUs3}</div>
          <div className='spaceAfterParagraph'></div>
          <div className=''>{languageData.aboutUs5}</div>
        </div>
        <div className='spaceBetweenChapters'></div>
        <div className='timelineWrapper sourceSans'>
          <div className='timelineLine'></div>
          <div className='timelinePlupp pluppOne'></div>
          <div className='timelinePlupp pluppTwo'></div>
          <div className='timelinePlupp pluppThree'></div>
          <div className='timelinePlupp pluppFour'></div>
          <div className='timelinePlupp pluppFive'></div>
          <div className='timelinePlupp pluppSix'></div>

          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
          <div className='textWrapperTimeline textOne'>{languageData.timeline1}</div>
          <div className='pictureWrapper pictureOne'>
            <img src={nollning} alt='The two of us together' className='picture' />
          </div>
          <div className='pictureWrapper pictureTwo'>
            <img src={nollegasque} alt='The two of us together' className='picture' />
          </div>
          <div className='pictureWrapper pictureThree'>
            <img src={sittning} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}

          <div className='textWrapperTimeline marginOnTopOfText textTwo'>
            {languageData.timeline2}
          </div>
          <div className='pictureWrapper pictureFour'>
            <img src={lund} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}

          <div className='textWrapperTimeline marginOnTopOfText textThree'>
            {languageData.timeline3}
          </div>
          <div className='pictureWrapper pictureFive'>
            <img src={examen} alt='The two of us together' className='picture' />
          </div>
          <div className='pictureWrapper pictureSix'>
            <img src={flytt} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}

          <div className='textWrapperTimeline marginOnTopOfText textFour'>
            {languageData.timeline4}
          </div>
          <div className='pictureWrapper pictureSeven'>
            <img src={malmo} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}
          <div className='textWrapperTimeline marginOnTopOfText textFive'>
            {languageData.timeline5}
          </div>
          <div className='pictureWrapper pictureEight'>
            <img src={forlovning} alt='The two of us together' className='picture' />
          </div>
          {/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */}

          <div className='textWrapperTimeline marginOnTopOfText textSix'>
            {languageData.timeline6}
          </div>
          <div className='pictureWrapper dottedCircle'>
            <LiaKissWinkHeartSolid className='heartEmoji' />
          </div>
        </div>
        <div className='spaceBetweenChapters'></div>
      </div>
    </div>
  );
};

export default MainPage;
