import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/LoginService";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // try {
    //   const res = await login({ username, password });
    //   if (res.success) {
    //     navigate("/dashboard");
    //   } else {
    //     setError(res.error || "Login failed");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   setError("Network or server error");
    // }

     if (username.trim() === "admin" && password.trim() === "123456") {
      setError("");
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
      }
  };

   

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome Back
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
              placeholder="admin"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
              placeholder="123456"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Hint: Try <span className="font-medium text-gray-800">admin / 123456</span>
        </p>
      </div>
    </div>
  );
}
