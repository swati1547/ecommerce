import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const mobileValidation = Yup.string()
  .required("This field is required")
  .length(10)
  .matches(/^[0-9]{10}$/, "Please enter a valid mobile number (10 digits)");

const formSchema = Yup.object({
  email: Yup.string()
    .required("This field is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email"
    ),
  mobileNo: mobileValidation,
});

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(formSchema), mode: "onChange" });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="email" {...register("email")}></input>
      {errors.email && <p>{errors.email.message}</p>}
      <br />
      <label>Mobile Number</label>
      <input type="text" maxLength={10} {...register("mobileNo")}></input>
      {errors.mobileNo && <p>{errors.mobileNo.message}</p>}
      <br />
      <button type="submit" disabled={isSubmitting || !isValid}>
        CONTINUE
      </button>
    </form>
  );
}
