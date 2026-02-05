import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const mobileValidation = Yup.string()
  .required("This field is required")
  .length(10)
  .matches(/^[0-9]{10}$/, "Please enter a valid mobile number (10 digits)");

const validationSchema = Yup.object({
  mobileNo: mobileValidation,
  email: Yup.string()
    .required("This field is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email"
    ),
  name: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
  date: Yup.string()
    .required("This field is required")
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Invalid date format. Use dd/mm/yyyy"
    ),
  altMobile: mobileValidation,
  hintName: Yup.string().required("This field is required"),
});

export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: { gender: "female" },
  });

  async function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        maxLength={10}
        {...register("mobileNo")}
        placeholder="Mobile Number"
      ></input>
      {errors.mobileNo && <p>{errors.mobileNo.message}</p>}

      <input type="email" {...register("email")} placeholder="Email"></input>
      {errors.email && <p>{errors.email.message}</p>}

      <input type="text" {...register("name")} placeholder="Full Name"></input>
      {errors.name && <p>{errors.name.message}</p>}

      <label>
        <input type="radio" value="male" {...register("gender")}></input>Male
      </label>
      <label>
        <input type="radio" value="female" {...register("gender")}></input>
        Female
      </label>
      {errors.gender && <p>{errors.gender.message}</p>}

      <input
        type="text"
        {...register("date")}
        placeholder="Birthday (dd/mm/yyyy)"
      ></input>
      {errors.date && <p>{errors.date.message}</p>}

      <input
        type="text"
        maxLength={10}
        {...register("altMobile")}
        placeholder="Mobile Number"
      ></input>
      {errors.altMobile && <p>{errors.altMobile.message}</p>}

      <input
        type="text"
        {...register("hintName")}
        placeholder="Hint Name"
        disabled={!watch("altMobile") || errors.altMobile}
      ></input>
      {errors.hintName && <p>{errors.hintName.message}</p>}

      <button type="submit" disabled={isSubmitting || !isValid}>
        SAVE DETAILS
      </button>
    </form>
  );
}

//if type=submit is wrong then also gives issue, its imp to get to know that btn is submitting and trigger onSubmit
