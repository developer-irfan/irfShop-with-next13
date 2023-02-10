"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CreateAccount = () => {
  //
  const pathname = usePathname();

  const alreadyAccount =
    pathname === "/login" ? "Need an account?" : "Already have an account?";
  const createAccount = pathname === "/login" ? "Create an account" : "Log In";
  const navigateTo = pathname === "/login" ? "/registration" : "/login";

  return (
    <p className="mt-8">
      {alreadyAccount}
      <Link
        href={navigateTo}
        className="text-blue-500 hover:text-blue-700 font-semibold pl-2"
      >
        {createAccount}
      </Link>
    </p>
  );
};

export default CreateAccount;
