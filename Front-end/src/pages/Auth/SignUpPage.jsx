import {Link} from "react-router-dom";
export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className=" backdrop-blur-xl rounded-3xl border border-zinc-800 p-8 shadow-2xl">

          {/* Title */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-white">Create Account</h1>
            <p className="text-zinc-400 text-sm mt-2">Fill in your details to get started</p>
          </div>

          <form className="space-y-5">

            {/* Name Field */}
            <div>
              <label className="text-sm font-medium text-white block mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-2 bg-zinc-800/70 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition h-12"
                />
              </div>
            </div>

            {/* Department Field */}
            <div>
              <label className="text-sm font-medium text-white block mb-2">Department</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-8 0H5m4-10h6m-6 4h6" />
                  </svg>
                </div>
                <select className="w-full pl-12 pr-4 py-2 bg-zinc-800/70 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-zinc-500 transition h-12 appearance-none cursor-pointer">
                  <option value="">Select Department</option>
                  <option className="text-white bg-zinc-800">Low</option>
                  <option className="text-white bg-zinc-800">CS</option>
                  <option className="text-white bg-zinc-800">civil Engineering</option>
                  <option className="text-white bg-zinc-800">It</option>
                  <option className="text-white bg-zinc-800">IS</option>
                  <option className="text-white bg-zinc-800">BIS</option>
                </select>
                {/* Dropdown arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-white block mb-2">Email</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="m@example.com"
                  className="w-full pl-12 pr-4 py-2 bg-zinc-800/70 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition h-12"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-white block mb-2">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-2 bg-zinc-800/70 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition h-12"
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <Link to="/">
              <button
              type="submit"
              className="w-full py-2 bg-white text-black font-semibold rounded-xl hover:bg-zinc-800 transition shadow-md text-lg"
            >
              Create Account
            </button>
            </Link>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-zinc-900 text-zinc-400">Or sign up with</span>
            </div>
          </div>

          {/* Google Button */}
          <button className="w-full py-2 bg-zinc-800/70 border border-zinc-700 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-800 transition font-medium">
            <span className="text-2xl font-bold text-white">G</span>
            <span className="text-white">Continue with Google</span>
          </button>

          {/* Login Link */}
          <p className="text-center mt-8 text-zinc-400 text-sm">
            Already have an account?{' '}
            <Link className="text-white font-medium underline hover:no-underline" 
            to="/login">
            Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}