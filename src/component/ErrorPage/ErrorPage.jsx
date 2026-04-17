
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white px-4">
      
      <div className="text-center max-w-lg">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg"
          >
            Go Home
          </Link>

          
        </div>

        
        

      </div>
    </div>
  );
};

export default ErrorPage;