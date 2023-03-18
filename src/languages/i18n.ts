import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ru from "./ru.json";
import fr from "./fr.json";
import de from "./de.json";

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
  lng: localStorage.getItem("lng") || "English",
  debug: false,
  resources,
  interpolation: {
    escapeValue: false,
  },
});
