import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "../i18n/en/en.json";
import RU from "../i18n/ru/ru.json";

const resources = {
  en: {
    translation: EN,
  },

  ru: {
    translation: RU,
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "en", //ru, kg
  fallbackLng: "ru",
});

export default i18next;
