import React from "react";
import { Button } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

interface Props {
  handlePrevStep: () => void;
}
const StepFour: React.FC<Props> = ({ handlePrevStep }) => {
  const { t } = useTranslation();
  return (
    <div className="Step Step1">
      <div className="Title">{t("congratulations")}</div>
      <div className="Lead">{t("successfullyRegistered")}</div>
      <Button primary onClick={handlePrevStep}>
        {t("prev")}
      </Button>
    </div>
  );
};

export default StepFour;
