import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
/* english */
import contentEN from './en/content.json';
import navbarEN from './en/navbar.json';
import aboutEN from './en/aboutMe.json';
import projectEN from './en/project.json';
import footerEN from './en/footer.json';
import workEN from './en/work.json';
/* spanish */
import contentES from './es/content.json';
import navbarES from './es/navbar.json';
import aboutES from './es/aboutMe.json';
import projectES from './es/project.json';
import footerES from './es/footer.json';
import workES from './es/work.json';

const resources = {
  en: {
    content: contentEN,
    navbar: navbarEN,
    about: aboutEN,
    projects: projectEN,
    footer: footerEN,
    work: workEN
  },
  es: {
    content: contentES,
    navbar: navbarES,
    about: aboutES, 
    projects: projectES,
    footer: footerES,
    work: workES
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