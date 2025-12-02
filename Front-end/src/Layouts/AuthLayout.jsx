import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-sm rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  );
}
