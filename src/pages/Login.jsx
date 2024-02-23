import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState } from "react";
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
      console.log(data);
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
    <>
      <form className="m-3 p-3 border-2 rounded-md inline-block flex-col">
        <h1 className="m-3 p-3">Login</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          required
          className="border m-2"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          required
          className="border m-2"
        />
        <Button className="m-3 p-3" onClick={loginSubmit}>
          Submit
        </Button>
        <h2>
          Not a user? <a href="/signup">sign up</a>
        </h2>
        {error && (
          <p className="m-2 text-red-700">Invalid username or password</p>
        )}
      </form>
    </>
  );
}

export default Auth;
