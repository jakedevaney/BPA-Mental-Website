import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="w-full max-w-md bg-gray-100 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-center text-black mb-6">
          Log In
        </h1>

        <form className="space-y-4">
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-slate-700"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-slate-700"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center text-sm text-black">
            <input
              type="checkbox"
              className="mr-2 rounded border-gray-500 text-blue-500 focus:ring-blue-500"
            />
            Remember me
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium"
          >
            Log In
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
