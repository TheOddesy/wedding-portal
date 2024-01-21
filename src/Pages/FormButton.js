import {useContext} from 'react';
import {LanguageContext} from '../Store/LanguageContext';

const FormButton = () => {
  const {languageData} = useContext(LanguageContext);
  return (
    <a
      href='https://hypoteket.se/'
      rel='noreferrer'
      target='_blank'
      className=' sourceSans formButton'>
      <div className='formText'>{languageData.linkToForm}</div>
    </a>
  );
};

export default FormButton;
