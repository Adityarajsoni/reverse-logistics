import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(role === "admin" ? "/admin" : "/customer");
  };

  const handleGoogleLogin = () => {
    // Dummy Google login action; replace with actual OAuth logic
    login("googleUser");
    navigate("/customer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-10 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center">Select Role to Login</h2>

        <button
          onClick={() => handleLogin("customer")}
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 py-2 px-4 rounded-xl font-semibold"
        >
          Login as Customer
        </button>

        <button
          onClick={() => handleLogin("admin")}
          className="w-full bg-purple-600 hover:bg-purple-700 transition duration-200 py-2 px-4 rounded-xl font-semibold"
        >
          Login as Admin
        </button>

        <div className="relative py-2 text-center text-sm text-gray-400">
          <span className="bg-gray-800 px-2 z-10 relative">or</span>
          <div className="absolute inset-0 border-t border-gray-600" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 transition duration-200 py-2 px-4 rounded-xl font-medium"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
