import React from "react";
import { useForm } from "react-hook-form";

const UseFormTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<{ name: string }>();

  const testSubmit = (data: { name: string }) => console.log(data);
  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(testSubmit)}>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: { value: true, message: "name fields is required!" },
              minLength: { value: 2, message: "min length must be 2!" },
            })}
          />
          <div>{errors?.name && <> {errors.name?.message} </>}</div>
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default UseFormTest;
