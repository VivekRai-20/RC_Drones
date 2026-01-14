import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // 🔌 Backend integration later
    setLoading(true);
    console.log({ email, password });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-[#fdf6ee] px-4 py-8 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 sm:p-8 shadow-sm">

        {/* Heading */}
        <h1 className="mb-2 text-center font-zentry text-2xl sm:text-3xl text-gray-900">
          Welcome Back
        </h1>
        <p className="mb-6 text-center text-sm text-gray-600">
          Login to your drone account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* Email */}
          <div>
            <label className="mb-1 block text-xs text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-md border border-black/20 bg-[#fffaf3]
              px-3 py-2 text-sm outline-none
              focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-xs text-gray-600">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-md border border-black/20 bg-[#fffaf3]
              px-3 py-2 text-sm outline-none
              focus:border-black"
            />
          </div>

          {/* Forgot */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-xs text-gray-600 hover:text-black cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-black py-2.5 text-sm text-white
            hover:opacity-90 transition disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-xs text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-black hover:underline cursor-pointer">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
