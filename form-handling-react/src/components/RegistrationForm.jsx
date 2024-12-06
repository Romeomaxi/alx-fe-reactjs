import React, { useState } from "react";

const RegistrationForm = () => {
  // State to manage input values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Basic validation
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Log form data and reset form
    console.log("Form Submitted:", formData);
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div>
      <h1>User Registration (Controlled Components)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username} // Controlled input
            onChange={handleChange} // Update state on input
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email} // Controlled input
            onChange={handleChange} // Update state on input
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password} // Controlled input
            onChange={handleChange} // Update state on input
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
