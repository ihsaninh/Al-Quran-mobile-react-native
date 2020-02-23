import I18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment/min/moment-with-locales';

const enDictionary = require('./locales/en-EN.json');
const idDictionary = require('./locales/id-ID.json');

const Translation = {
  en: {
    translation: enDictionary,
  },
  id: {
    translation: idDictionary,
  },
};

I18n.use(initReactI18next);

I18n.init({
  resources: Translation,
  fallbackLng: ['en', 'id'],
  lng: 'id',
});

I18n.on('languageChanged', lng => {
  moment.locale(lng);
});

export default I18n;
