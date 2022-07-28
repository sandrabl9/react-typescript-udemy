import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styless/styles.css";

//Aún sería necesario validar el formulario antes de enviar
export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
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
          name="username"
          value={username}
          onChange={onChange}
          className={`${username.trim().length <= 0 && "has-error"}`}
        />
        {username.trim().length <= 0 && (
          <span>Please enter a valid username</span>
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Please enter a valid email</span>}
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
          className={`${password1.trim().length <= 0 && "has-error"}`}
        />
        {password1.trim().length <= 0 && (
          <span>Please enter a valid password</span>
        )}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>Please enter more than 6 characters</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        {password2 !== password1 && (
          <span>Please enter the same password again</span>
        )}

        <button type="submit">Submit</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
