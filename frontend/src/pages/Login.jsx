import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "SUPER_ADMIN") navigate("/super");
      if (res.data.role === "ADMIN") navigate("/admin");
      if (res.data.role === "USER") navigate("/user");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>

        <Input
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}