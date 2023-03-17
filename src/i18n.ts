import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./languages/en.json";
import ru from "./languages/ru.json";
import fr from "./languages/fr.json";
import de from "./languages/de.json";

export const resources = {
  English: {
    translation: en,
  },
  Russian: {
    translation: ru,
  },
  French: {
    translation: fr,
  },
  German: {
    translation: de,
  },
};

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lng") || "en",
  debug: false,
  resources,
  interpolation: {
    escapeValue: false,
  },
});
