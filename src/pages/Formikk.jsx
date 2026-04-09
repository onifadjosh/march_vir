import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
const Formikk = () => {
  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: yup.object({
      firstName: yup
        .string("first name must be a string")
        .required("first name is required")
        .min(3, "Min of three letters required"),
      lastName: yup
        .string("last name must be a string")
        .required("last name is required")
        .min(3, "Min of three letters required"),
      email: yup
        .string("email must be a string")
        .required("email is required")
        .email("invalid email format"),
      password: yup
        .string()
        .required("password is required")
        .min(4, "Min of four characters required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "password must be strong"
        ),
    }),
  });

  // console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.touched);

  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        name="firstName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.firstName && formik.errors.firstName && (
        <small className="text-danger">{formik.errors.firstName}</small>
      )}
      <br />
      <input
        type="text"
        placeholder="last name"
        name="lastName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {
        (formik.touched.lastName && formik.errors.lastName)?<small className="text-danger">{formik.errors.lastName}</small>:""
      }

      {formik.touched.lastName && formik.errors.lastName && (
        <small className="text-danger">{formik.errors.lastName}</small>
      )}
      {/* short circuiting */}
      <br />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.email && formik.errors.email && (
        <small className="text-danger">{formik.errors.email}</small>
      )}
      <br />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.password && formik.errors.password && (
        <small className="text-danger">{formik.errors.password}</small>
      )}
      <br />

      <button onClick={formik.handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};

export default Formikk;
