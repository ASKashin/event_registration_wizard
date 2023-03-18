import React from "react";
import { Dropdown, Select } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { ReactComponent as ArrowDown } from "../images/arrow-down.svg";
const SwitchLanguage = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  const defValue = localStorage.getItem("lng");

  return (
    <>
      <label>{t("chooseLanguage")}</label>
      <Dropdown
        icon={<ArrowDown />}
        text={defValue ? (defValue as string) : "English"}
      >
        <Dropdown.Menu>
          <Dropdown.Item
            text="English"
            onClick={() => handleChangeLng("English")}
          />
          <Dropdown.Item
            text="Russian"
            onClick={() => handleChangeLng("Russian")}
          />
          <Dropdown.Item
            text="French"
            onClick={() => handleChangeLng("French")}
          />
          <Dropdown.Item
            text="German"
            onClick={() => handleChangeLng("German")}
          />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default SwitchLanguage;
