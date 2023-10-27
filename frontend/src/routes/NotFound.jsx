import React from 'react';
import { FaHome } from 'react-icons/fa'; // Import the React Home icon
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-primary-500 text-primary-400">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">404</h1>
        <p className="text-2xl mb-8">Page not found</p>
        <Link
          to="/"
          className="bg-primary-400 text-primary-900 py-2 text-black px-4 rounded-full text-lg hover:bg-primary-300 hover:text-primary-800 transition duration-300 ease-in-out"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
