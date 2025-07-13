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

  //   watch()
  return (
    <React.Fragment>
      <section>
        <form action="" onSubmit={handleSubmit(submitRegister)}>
          <label htmlFor="name">
            Name
            <input
              type="name"
              id="name"
              placeholder="name"
              {...register("name", {
                required: {
                  value: true,
                  message: ' "Name field is required!"',
                },
                minLength: { value: 2, message: "min length must be min-2" },
                maxLength: 20,
              })}
            />
          </label>
          <span>
            {/* {errors.name?.type === "required" && <>{errors.name.message}</>} */}
            {errors.name?.type === "maxLength" && (
              <>
                <p>Max Length must be under 20 </p>
              </>
            )}
            {errors?.name && (
              <>
                <p>{errors.name?.message}</p>
              </>
            )}
          </span>

          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true, min: 2, max: 20 })}
            />
          </label>
          <span>{errors.email && <>Emial field is required!</>}</span>
          <label htmlFor="password">
            Password
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
            {isSubmitting ? "loading" : "submit"}
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Register;
