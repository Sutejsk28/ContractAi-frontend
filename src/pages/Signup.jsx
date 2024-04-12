import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const server = "http://localhost:8080/api/v1";

  const [error, setError] = useState();
  const navigate = useNavigate();

  const signupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/user/signup`,
        {
          name,
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
      console.log(data);
      navigate("/"); // Navigate to home or a post-signup page
    } catch (error) {
      setError(error.message);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="w-full max-w-sm p-8 space-y-6 rounded-lg shadow-lg bg-white"
        onSubmit={signupSubmit}
      >
        <h1 className="text-2xl font-thin text-center text-gray-900">Sign Up For ContractIQ</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
            className="w-full px-4 py-2 rounded-md border-gray-300 border"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full px-4 py-2 rounded-md border-gray-300 border"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full px-4 py-2 rounded-md border-gray-300 border"
          />
        </div>
        <Button className="w-full py-2 bg-gray-700 text-white rounded-md transition duration-200">
          Submit
        </Button>
        {error && (
          <p className="text-center text-sm text-red-600 mt-4">
            {error}
          </p>
        )}
        <p className="text-center text-sm">
          Already a user? <a href="/" className="font-bold">Log in</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
