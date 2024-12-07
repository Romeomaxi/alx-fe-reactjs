import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Handle form submission
  const onSubmit = (values, { resetForm }) => {
    console.log("Form Submitted", values);
    resetForm();
  };

  return (
    <div>
      <h1>User Registration (Formik)</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" placeholder="Enter your username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" placeholder="Enter your password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default formikForm;
