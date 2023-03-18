import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Form, Input } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import "./Steps.sass";

interface Props {
  handleNextStep: () => void;
}

const StepOne: React.FC<Props> = ({ handleNextStep }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  };
  const { errors, values, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: yup.object({
      firstName: yup
        .string()
        .trim()
        .matches(/^[a-zA-Z ]+$/, "должно содержать только буквы")
        .required("поле обязательно для ввода"),
      lastName: yup
        .string()
        .trim()
        .matches(/^[a-zA-Z ]+$/, "должно содержать только буквы")
        .required("поле обязательно для ввода"),
      email: yup
        .string()
        .email("введите корректный емайл")
        .required("поле обязательно для ввода"),
      age: yup.string().required("поле обязательно для ввода"),
    }),
    onSubmit: (data) => {
      console.log(data);
      // handleNextStep();
    },
  });
  const { t } = useTranslation();
  return (
    <div className="Step Step1">
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>{t("firstName")}</label>
          <Input
            className={errors.firstName ? "Error" : ""}
            type="text"
            name="firstName"
            value={values.firstName}
            error={Boolean(touched.firstName && errors.firstName)}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </Form.Field>
        <Form.Field>
          <label>{t("lastName")}</label>
          <Input
            className={errors.lastName ? "Error" : ""}
            type="text"
            name="lastName"
            value={values.lastName}
            error={Boolean(touched.lastName && errors.lastName)}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </Form.Field>
        <Form.Field>
          <label>{t("email")}</label>
          <Input
            className={errors.email ? "Error" : ""}
            type="text"
            name="email"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </Form.Field>
        <Form.Field>
          <label>{t("age")}</label>
          <Input
            className={errors.age ? "Error" : ""}
            type="number"
            name="age"
            error={Boolean(touched.age && errors.age)}
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </Form.Field>
        <Form.Field className="Buttons">
          <Button onClick={handleNextStep} type={"submit"}>
            {t("next")}
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default StepOne;
