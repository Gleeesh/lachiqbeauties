import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 transition-opacity duration-700">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      {/* Text */}
      <p className="text-lg font-semibold text-gray-700">Please wait...</p>
    </div>
  );
};

export default Loading;
