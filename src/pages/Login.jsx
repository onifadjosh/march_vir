import axios from "axios";
import { useFormik } from "formik";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import * as yup from "yup";
const Login = () => {
    const cookies = new Cookies()
    let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async(values) => {
      try {
        console.log(values);
      let response = await axios.post("http://localhost:5009/api/v1/login",values)
      console.log(response.data);
      if(response.status==200){
        alert(response.data.message)

        const decoded = jwtDecode(response.data.data.token)

        console.log(decoded);
        localStorage.setItem("token", response.data.data.token)

        cookies.set("token", response.data.data.token, {expires:new Date(decoded.exp*1000)})

        navigate('/')
      }
      } catch (error) {
        console.log(error);
        
        alert("Error logging user")
      }
      
    },

    validationSchema: yup.object({
  
      email: yup
        .string("email must be a string")
        .required("email is required")
        .email("invalid email format"),
      password: yup
        .string()
        .required("password is required")
       ,
    }),
  });

  // console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.touched);

  return (
    <div>
      
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
     {formik.isSubmitting?"Submitting...":"Submit" }
      </button>
    </div>
  );
};

export default Login;
