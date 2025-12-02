import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-zinc-400">The page you are looking for does not exist.</p>
        <div className="mt-6">
          <Link to="/" className="text-white underline">Return home</Link>
        </div>
      </div>
    </div>
  );
}
