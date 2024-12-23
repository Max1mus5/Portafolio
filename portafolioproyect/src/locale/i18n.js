import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
/* english */
import navbarEN from './en/navbar.json';
import aboutEN from './en/aboutMe.json';
/* spanish */
import navbarES from './es/navbar.json';
import aboutES from './es/aboutMe.json';

const resources = {
  en: {
    navbar: navbarEN,
    about: aboutEN,
  },
  es: {
    navbar: navbarES,
    about: aboutES, 
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    ns: ['navbar'],
    defaultNS: 'navbar',
    react: {
      useSuspense: false // se usa para deshabilitar el warning de React 18
    }
  });
export default i18n;