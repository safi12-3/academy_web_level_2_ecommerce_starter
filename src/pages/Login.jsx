import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("isAuthenticated", "true");

    // If there are savedFavorites in localStorage, merge them with the authenticated favorites
    const savedFavorites =
      JSON.parse(localStorage.getItem("savedFavorites")) || [];
    let currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    currentFavorites = [...currentFavorites, ...savedFavorites];
    localStorage.setItem("favorites", JSON.stringify(currentFavorites));

    // Remove savedFavorites after merging them
    localStorage.removeItem("savedFavorites");

    navigate("/");
  };

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("isAuthenticated", "true");
    navigate("/");
  };

  return (
    <main className="flex-grow">
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {isSignup ? "Create your account" : "Sign in to your account"}
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={isSignup ? handleSignup : handleLogin}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required="true"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required="true"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>

          <div className="text-center">
            <button
              className="text-blue-600 hover:text-blue-500"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
