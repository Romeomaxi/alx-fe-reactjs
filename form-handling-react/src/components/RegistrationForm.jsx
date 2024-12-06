import React, { useState } from "react";

const RegistrationForm = () => {
  // Separate state for each input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Log the form data
    console.log("Form Submitted:", { username, email, password });

    // Reset form fields
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
            value={username} // Explicitly set to username
            onChange={(e) => setUsername(e.target.value)} // Update username state
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email} // Explicitly set to email
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password} // Explicitly set to password
            onChange={(e) => setPassword(e.target.value)} // Update password state
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
