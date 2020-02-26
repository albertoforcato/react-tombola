import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextXhrBackend from "i18next-xhr-backend";

const options = {
  fallbackLng: "it",
  debug: false,
  interpolation: {
    escapeValue: false
  },
  ns: ["translation"],
  defaultNS: "translation",
  backend: {
    loadPath: "locales/{{lng}}/{{ns}}.json"
  }
};

i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(I18NextXhrBackend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(I18nextBrowserLanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init(options);

export default i18n;
