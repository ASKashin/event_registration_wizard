import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import "./Steps.sass";

interface Props {
  handleNextStep: () => void;
}

const StepOne: React.FC<Props> = ({ handleNextStep }) => {
  const { t } = useTranslation();
  return (
    <div className="Step Step1">
      <Form>
        <Form.Field>
          <label>{t("firstName")}</label>
          <Input
            type="text"
            name="firstName"
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
          <label>{t("lastName")}</label>
          <Input
            type="text"
            name="lastName"
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
          <label>{t("email")}</label>
          <Input
            type="text"
            name="email"
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
          <label>{t("age")}</label>
          <Input
            type="text"
            name="age"
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
        {/*<Form.Field>*/}
        {/*  <p className="Note">*/}
        {/*    Note that once you select a group, you won&apos;t be able to change*/}
        {/*    it later. You can also select a group directly from the users table.*/}
        {/*  </p>*/}
        {/*</Form.Field>*/}
        <Form.Field className="Buttons">
          <Button onClick={handleNextStep}>{t("next")}</Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default StepOne;
