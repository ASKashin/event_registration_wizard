import React from "react";
import DatePicker from "react-datepicker";
import { Button, Dropdown, Form, Input, TextArea } from "semantic-ui-react";

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const StepTwo: React.FC<Props> = ({ handleNextStep, handlePrevStep }) => {
  return (
    <div className="Step Step2">
      <Form>
        <Form.Field>
          <label>Ticket Type</label>
          <Dropdown
            // icon={<FaAngleDown />}
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
          <label>Dietary Restrictions</label>
          <TextArea
            type="text"
            name="dietary"
            // value={values.firstName}
            // error={Boolean(touched.firstName && errors.firstName)}
            // onChange={({ target: { value } }) => {
            //   if (value.length < 20) {
            //     setValues({
            //       ...values,
            //       firstName: value,
            //     });
            //   }
            // }}
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <DatePicker />
        </Form.Field>
        <Form.Field className="Buttons">
          <Button primary onClick={handlePrevStep}>
            Prev
          </Button>
          <Button primary onClick={handleNextStep}>
            Next
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default StepTwo;
