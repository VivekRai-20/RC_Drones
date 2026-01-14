import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setLoading(true);

    // 🔌 Backend integration later
    console.log({ name, email, password });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-[#fdf6ee] px-4 py-8 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 sm:p-8 shadow-sm">

        {/* Heading */}
        <h1 className="mb-2 text-center font-zentry text-2xl sm:text-3xl text-gray-900">
          Create Account
        </h1>
        <p className="mb-6 text-center text-sm text-gray-600">
          Join the future of aerial innovation
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* Name */}
          <div>
            <label className="mb-1 block text-xs text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-md border border-black/20 bg-[#fffaf3]
              px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

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
              px-3 py-2 text-sm outline-none focus:border-black"
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
              px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-xs text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-md border border-black/20 bg-[#fffaf3]
              px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-xs text-red-500">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-black py-2.5 text-sm text-white
            hover:opacity-90 transition disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Login */}
        <p className="mt-6 text-center text-xs text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-black hover:underline cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
