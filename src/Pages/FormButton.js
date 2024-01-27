import {useContext} from 'react';
import {LanguageContext} from '../Store/LanguageContext';

const FormButton = () => {
  const {languageData} = useContext(LanguageContext);
  return (
    <a
      href=' https://docs.google.com/forms/d/e/1FAIpQLSdoY09dfreg5hgPVkz_CTrL2GUNAYR-YxfBbqfvoBgwQxLU1w/viewform?usp=sf_link'
      rel='noreferrer'
      target='_blank'
      className=' sourceSans formButton'>
      <div className='formText rsvp'>{languageData.linkToForm}</div>
      <div className='formText here'>{languageData.here}</div>
    </a>
  );
};

export default FormButton;
