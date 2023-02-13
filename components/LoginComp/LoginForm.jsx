"use client";
import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import LoginButton from "./LoginButton";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { userLogin, adminLogin } from "@/redux/Actions/Actions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  const router = useRouter();

  //
  const dispatch = useDispatch();

  //

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "irfan@gmail.com" && password === "irfan") {
      dispatch(userLogin(email, password));
      router.push("/products");
    }
    if (email === "admin@gmail.com" && password === "admin") {
      dispatch(adminLogin());
      router.push("/add-new-products");
    }
  };

  //return
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          autoFocus
          required
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          minlength="4"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
          required
        />
      </div>

      <ForgotPassword />
      <LoginButton />
    </form>
  );
};

export default LoginForm;
