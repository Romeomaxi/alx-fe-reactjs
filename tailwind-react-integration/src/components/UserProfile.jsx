function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto my-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Profile Image with hover effect */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      {/* Heading with hover text color change */}
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4 text-center hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
