import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export const Fromvalidation = () => {
  const validation = yup.object().shape({
    firstname: yup.string().required("first name is required"),
    lastname: yup.string().required(" last name is required"),
    email : yup.string().required("email is required").email("email is invalied")

  });

  const formik = useFormik({
    initialValues: {
     firstname:'',
     lastname :'',
     email :'',
     contact : ''
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstname"
          name="firstname"
          label="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />

        <TextField
          fullWidth
          id="lastname"
          name="lastname"
          label="lastname"
          type="text"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.lastname && Boolean(formik.errors.lastname)
          }
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.email && Boolean(formik.errors.email)
          }
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="contact"
          name="contact"
          label="contact"
          type="number"
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.contact && Boolean(formik.errors.contact)
          }
          helperText={
            formik.touched.contact && formik.errors.contact
          }
        />
       

  


       

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
