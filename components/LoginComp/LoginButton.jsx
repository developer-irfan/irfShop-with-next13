"use client";
import { usePathname } from "next/navigation";

const LoginButton = () => {
  const pathname = usePathname();

  //
  const bntText = pathname === "/login" ? "Log In" : "Sign Up";

  return (
    <button
      type="submit"
      className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
    >
      {bntText}
    </button>
  );
};

export default LoginButton;
