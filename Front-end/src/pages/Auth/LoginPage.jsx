import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      
      <div className="w-100 max-w-md">
        {/* Card */}
        <div className="backdrop-blur-xl rounded-3xl border border-zinc-800 p-8 shadow-2xl">

          {/* Title */}
          <div className="mb-5">
            <h1 className="text-[20px] font-semibold text-white">Sign In</h1>
            <p className="text-zinc-400 text-[15px] mt-1">Login to your account to continue</p>
          </div>

          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-white block mb-2">Email</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                  {/* Simple envelope SVG */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="m@example.com"
                  className="w-full pl-12 pr-4 py-2 bg-zinc-800/70 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition h-11"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-white">Password</label>
                <a href="#" className="text-sm text-zinc-400 hover:text-white transition">
                  Forgot your password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                  {/* Simple lock SVG */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-2 bg-zinc-800/70 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition "
                  value={form.password}
                  onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                />
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                className="w-5 h-4 rounded border-zinc-600 bg-zinc-800 text-white focus:ring-0 cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-zinc-300 cursor-pointer">
                Remember me
              </label>
            </div>

            {/* Continue button */}
            <button
              type="submit"
              className="w-full py-2 bg-white text-black rounded-xl hover:bg-zinc-200 transition font-semibold"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-zinc-900 text-zinc-400">Or continue with</span>
            </div>
          </div>

          {/* Google button */}
          <button className="w-full py-2 bg-zinc-800/70 border border-zinc-700 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-800 transition">
            {/* Simple Google "G" - no icon library needed */}
            <span className="text-2xl font-bold text-white">G</span>
            <span className="text-white font-medium">Continue with Google</span>
          </button>

          {/* Sign up link */}
          <p className="text-center mt-6 text-zinc-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white font-medium underline hover:no-underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}




