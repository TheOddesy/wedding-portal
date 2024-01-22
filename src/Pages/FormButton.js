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
      <div className='formText'>{languageData.linkToForm}</div>
    </a>
  );
};

export default FormButton;
