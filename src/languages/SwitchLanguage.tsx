import React from "react";
import { useTranslation } from "react-i18next";
const SwitchLanguage = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <select onChange={(e) => handleChangeLng(e.target.value)}>
      <option value="English">English</option>
      <option value="Russian">Russian</option>
      <option value="French">French</option>
      <option value="German">German</option>
    </select>
  );
};
export default SwitchLanguage;
