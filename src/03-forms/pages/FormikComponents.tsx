import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styless/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Component</h1>
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name="firstName" component="span" />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />
            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="jobType">Job Type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="leader">Leader</option>
              <option value="ceo">CEO</option>
            </Field>
            <label>
              <ErrorMessage name="jobType" component="span" />
              <Field name="terms" type="checkbox" />
              Terms & Conditions
            </label>
            <ErrorMessage name="terms" component="span" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
