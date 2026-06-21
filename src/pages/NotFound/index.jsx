import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
        404
      </h1>
      <p className="text-[#334155] text-base md:text-lg mb-3 font-medium">
        Page not found
      </p>
      <Link
        to="/"
        aria-label="Back to dashboard"
        className="text-[#4f46e5] hover:text-[#4338ca] text-sm md:text-base font-semibold transition-all duration-200"
      >
        Back to dashboard
      </Link>
    </div>
  );
};

export default NotFound;
