import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-white shadow-md rounded-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mb-4"
      />
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        auctor libero et velit cursus, non pretium lorem convallis.
      </p>
    </div>
  );
};

export default UserProfile;
