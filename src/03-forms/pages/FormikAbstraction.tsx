import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styless/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener menos de 15 caracteres")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Debe tener menos de 15 caracteres")
            .required("Required"),
          email: Yup.string()
            .email("Email no tiene un formato válido")
            .required("Required"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condicones"),
          jobType: Yup.string()
            .notOneOf(["ceo"], "Esta opción no puede ser seleccionada")
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Sandra"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Bretones"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="sandrai@gmail.com"
            />

            <MySelect name="jobType" as="select" label="Job Type">
              <option value="jobType">Job Type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="leader">Leader</option>
              <option value="ceo">CEO</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
