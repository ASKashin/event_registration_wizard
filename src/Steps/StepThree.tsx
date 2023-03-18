import React, { useState } from "react";
import { Button, Dropdown, Form, Input } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { ReactComponent as ArrowDown } from "../images/arrow-down.svg";

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const StepThree: React.FC<Props> = ({ handleNextStep, handlePrevStep }) => {
  const { t } = useTranslation();
  const [duration, setDuration] = useState(1);
  return (
    <div className="Step">
      <Form>
        <Form.Field>
          <label>{t("paymentMethod")}</label>
          <Dropdown
            icon={<ArrowDown />}
            text="Actions"
            // disabled={!selectedItems.length}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                // icon={<PauseIcon />}
                text="Pause"
                // onClick={() => handlePauseCards.mutate(selectedItems)}
              />
              <Dropdown.Item
                // icon={<UnPauseIcon />}
                text="Unpause"
                // onClick={() => handleUnpauseCards.mutate(selectedItems)}
              />
              <Dropdown.Item
                // icon={<BlockIcon />}
                text="Block"
                // onClick={() => handleBlockCards.mutate(selectedItems)}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field>
          <label>
            {t("numberOfTickets")} {duration}
          </label>
          <Input
            className="RangeInput"
            min={1}
            max={100}
            name="duration"
            onChange={(e) => setDuration(Number(e.target.value))}
            step={1}
            type="range"
            value={duration}
          />
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

export default StepThree;
