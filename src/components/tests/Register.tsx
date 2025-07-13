import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const submitRegister: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <section>
        <form action="" onSubmit={handleSubmit(submitRegister)}>
          <label htmlFor="name">
            <input
              type="name"
              id="name"
              placeholder="name"
              {...register("name", { required: true, min: 2, max: 20 })}
            />
          </label>
          <span>{errors.name && <>Emial field is required!</>}</span>

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
            disabled={isSubmitting}
            className={isSubmitting ? "bg-red-500" : "bg-green-500"}
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Register;
