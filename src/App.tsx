import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
import { Button, Header } from "semantic-ui-react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import "./App.sass";

const App = () => {
  const [step, setStep] = useState(1);
  const triggerNextStep = () => {
    setStep(step + 1);
  };
  const triggerPrevStep = () => {
    setStep(step - 1);
  };

  const stepRenderer = () => {
    switch (step) {
      case 1:
        return <StepOne handleNextStep={triggerNextStep} />;
      case 2:
        return (
          <StepTwo
            handleNextStep={triggerNextStep}
            handlePrevStep={triggerPrevStep}
          />
        );
      case 3:
        return (
          <StepThree
            handleNextStep={triggerNextStep}
            handlePrevStep={triggerPrevStep}
          />
        );
      case 4:
        return <StepFour handlePrevStep={triggerPrevStep} />;
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <div className="Container">
        {step !== 4 && <Header as="h4">Please complete the form</Header>}
        <div className="StepContent">{stepRenderer()}</div>
      </div>
    </div>
  );
};

export default App;
