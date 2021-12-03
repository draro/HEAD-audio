/* eslint-disable no-unused-vars */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationES from "./locales/es/translation.json";
import translationRU from "./locales/ru/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";
// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};
// let lang;
// if (typeof window !== "undefined") {
//   console.log("we are running on the client");
//   if (localStorage.heolo_lang) {
//     lang = localStorage.getItem("heolo_lang");
//   }
// } else {
//   console.log("we are running on the server");
// }

i18n
  .use(detector)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    order: [
      "navigator",
      "localStorage",
      "cookie",
      "sessionStorage",
      "htmlTag",
      "querystring",
    ],
    resources,
    // lng: lang ? lang : "en",
    // fallbackLng: "en",
    // keySeparator: false, // we do not use keys in form messages.welcome

    // interpolation: {
    //   escapeValue: false, // react already safes from xss
    // },
  });

export default i18n;
