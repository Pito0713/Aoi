import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import zhHant from "./translations/zhHant.json";
import zhHans from "./translations/zhHans.json";

const resources = {
  en: {
    translation: en,
  },
  zhHant: {
    translation: zhHant,
  },
  zhHans: {
    translation: zhHans,
  },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: "zhHant",
    fallbackLng: "zhHans",
    debug: false,
    resources,

    interpolation: {
      escapeValue: false, 
    },
  })
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

export { i18n };
