import React from "react";
import { Formik, Form } from "formik";
import formJSON from "../data/custom-form.json";
import { MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJSON.map(({ type, name, label, placeholder }) => {
              return (
                <MyTextInput
                  key={name}
                  type={type as any}
                  label={label}
                  placeholder={placeholder}
                  name={name}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
