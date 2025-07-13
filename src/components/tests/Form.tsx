import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type Fields = {
  email: string;
  password: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmittings },
  } = useForm<Fields>();

  const login: SubmitHandler<Fields> = (data) => {
    console.log(data);
    console.log(data.email);
  };
  return (
    <React.Fragment>
      <section>
        <form action="" onSubmit={handleSubmit(login)}>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true, min: 2, max: 20 })}
            />
          </label>
          <span>{errors.email && <>Emial field is required!</>}</span>
          <label htmlFor="password">
            <input
              type="text"
              id="password"
              placeholder="password"
              {...register("password")}
            />
          </label>
          <span>{errors.password && <>Password field is required!</>}</span>

          <button
            disabled={isLoading}
            className={isLoading ? "bg-red-500" : "bg-green-500"}
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Form;
