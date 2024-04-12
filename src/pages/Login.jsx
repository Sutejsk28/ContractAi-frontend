import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const server = "http://localhost:8080/api/v1";

  const [error, setError] = useState();
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="w-full max-w-sm p-8 space-y-6 rounded-lg shadow-2xl bg-white"
        onSubmit={loginSubmit}
      >
        <h1 className="text-2xl font-thin text-center text-gray-900">Login to ContractIQ</h1>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full px-4 py-2 rounded-md border-gray-200 border"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full px-4 py-2 rounded-md border-gray-200 border"
          />
        </div>
        <Button className="w-full py-2 bg-gray-600 text-white rounded-md transition duration-200">
          Login
        </Button>
        {error && (
          <p className="text-center text-sm text-red-600 mt-4">
            Invalid username or password
          </p>
        )}
        <p className="text-center text-sm">
          Not a user? <a href="/signup" className="font-bold">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Auth;
