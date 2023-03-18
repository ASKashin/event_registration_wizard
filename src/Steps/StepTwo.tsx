import React from "react";

// @ts-ignore
import DatePicker from "react-datepicker";
import { Button, Dropdown, Form, Input, TextArea } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { ReactComponent as ArrowDown } from "../images/arrow-down.svg";

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const StepTwo: React.FC<Props> = ({ handleNextStep, handlePrevStep }) => {
  const { t } = useTranslation();
  return (
    <div className="Step">
      <Form>
        <Form.Field>
          <label>{t("ticketType")}</label>
          <Dropdown
            icon={<ArrowDown />}
            text="Actions"
            // disabled={!selectedItems.length}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                text="Pause"
                // onClick={() => handlePauseCards.mutate(selectedItems)}
              />
              <Dropdown.Item
                text="Unpause"
                // onClick={() => handleUnpauseCards.mutate(selectedItems)}
              />
              <Dropdown.Item
                text="Block"
                // onClick={() => handleBlockCards.mutate(selectedItems)}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field>
          <label>{t("dietaryRestrictions")}</label>
          <TextArea type="text" name="dietary" />
        </Form.Field>
        <Form.Field>
          <label>{t("eventDate")}</label>
          <DatePicker />
        </Form.Field>
        <Form.Field className="Buttons">
          <Button primary onClick={handlePrevStep}>
            {t("prev")}
          </Button>
          <Button primary onClick={handleNextStep} type={"submit"}>
            {t("next")}
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default StepTwo;
