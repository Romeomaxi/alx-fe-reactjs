import React from "react";
import UserProfile from "./components/UserProfile"; // Import the UserProfile component

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Render the UserProfile component */}
      <UserProfile />
    </div>
  );
}

export default App;
