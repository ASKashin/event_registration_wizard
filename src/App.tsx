import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { useFormik } from "formik";
// import * as yup from "yup";
import { Header } from "semantic-ui-react";

import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import SwitchLanguage from "./languages/SwitchLanguage";
import "./App.sass";

const App = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const triggerNextStep = () => {
    setStep(step + 1);
  };
  const triggerPrevStep = () => {
    setStep(step - 1);
  };

  //
  // const res = await fetch("http://localhost:3001", {
  //   method: "POST",
  //   body: formData,
  // });
  //
  // axios.post(`"http://localhost:3001"`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })

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
        {step !== 4 && <SwitchLanguage />}
        {step !== 4 && <Header as="h4">{t("titleForm")}</Header>}
        <div className="StepContent">{stepRenderer()}</div>
      </div>
    </div>
  );
};

export default App;
