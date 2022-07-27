import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styless/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    username,
    email,
    password1,
    password2,
  } = useForm({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={username}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />

        <button type="submit">Submit</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
