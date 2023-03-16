import React from "react";
import { Button } from "semantic-ui-react";

interface Props {
  handlePrevStep: () => void;
}
const StepFour: React.FC<Props> = ({ handlePrevStep }) => {
  return (
    <div className="Step Step1">
      <div className="Title">Congratulations!</div>
      <div className="Lead">You have successfully registered.</div>
      <Button primary onClick={handlePrevStep}>
        Prev
      </Button>
    </div>
  );
};

export default StepFour;
