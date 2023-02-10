import React from "react";
import CreateAccount from "./CreateAccount";
import FormSectionImg from "./FormSectionImg";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <FormSectionImg />

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <LoginForm />

            <hr className="my-6 border-gray-300 w-full" />
            <CreateAccount />
          </div>
        </div>
      </section>
      <hr className="my-10 border-gray-300 w-full" />
    </>
  );
};

export default Login;
