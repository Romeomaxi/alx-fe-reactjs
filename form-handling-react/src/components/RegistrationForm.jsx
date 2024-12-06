import React, { useState } from "react";

const RegistrationForm = () => {
  // Separate states for form fields and errors
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Object to hold error messages

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!username) newErrors.username = "Username is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Update errors state
      return;
    }

    // Log form data and clear errors
    console.log("Form Submitted:", { username, email, password });
    setErrors({});
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
