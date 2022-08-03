import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import "../styless/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener menos de 15 caracteres")
            .min(2, "Debe tener al menos de 2 caracteres")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Debe tener menos de 15 caracteres")
            .min(2, "Debe tener al menos de 2 caracteres")
            .required("Required"),
          email: Yup.string()
            .email("Email no tiene un formato válido")
            .required("Required"),
          password: Yup.string()
            .min(6, "Mínimo de 6 caracteres")
            .required("Required"),
          password2: Yup.string()
            .min(6, "Mínimo de 6 caracteres")
            .oneOf([Yup.ref("password"), null], "Password must match")
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
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" />
            <label htmlFor="password2">Repeat Password</label>
            <Field
              name="password2"
              type="password"
              placeholder="Repeat Password"
            />
            <ErrorMessage name="password2" component="span" />

            <button type="submit">Submit</button>
            <button type="reset">Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
