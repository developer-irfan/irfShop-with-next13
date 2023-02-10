import ForgotPassword from "./ForgotPassword";
import LoginButton from "./LoginButton";

const LoginForm = () => {
  return (
    <form className="mt-6">
      <div>
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          autofocus
          required
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter Password"
          minlength="6"
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
