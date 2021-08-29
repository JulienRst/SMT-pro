import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import FR from './fr.json';

enum ILanguage {
  fr = 'fr',
}

const resources = {
  fr: {
    translation: FR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: ILanguage.fr,
  interpolation: { escapeValue: false }
});

export { ILanguage, i18n };