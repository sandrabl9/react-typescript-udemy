import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import formJSON from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();

  for (const validation of input.validations) {
    if (validation.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (validation.type === "minLength") {
      schema = schema.min(
        validation.value || 1,
        `Mínimo de ${validation.value || 1} caracteres`
      );
    }
    if (validation.type === "email") {
      schema = schema.email("Introduzca un e-mail válido");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJSON.map(({ type, name, label, placeholder, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    label={label}
                    placeholder={placeholder}
                    name={name}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((option: { id: number; label: string }) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
