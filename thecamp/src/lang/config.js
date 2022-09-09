import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'fr',
  lng: 'fr',
  resources: {
    fr: {
      translations: require('./locales/fr.json')
    }
  },
  ns: ['fr'],
  defaultNS: 'fr'
});

i18n.languages = ['fr'];

export default i18n;
