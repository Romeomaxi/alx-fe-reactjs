import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

const App = () => {
  return (
    <div>
      <div>
      <h1>User Registration</h1>
      <RegistrationForm />
    </div>
      <h1>User Registration (Formik)</h1>
      <FormikForm />
    </div>
  );
};

export default App;
