import LoginButton from "../LoginComp/LoginButton";
const SignupForm = () => {
  return (
    <form className="mt-6 space-y-4">
      <div className="mt-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Name"
          minlength="6"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
          required
        />
      </div>
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
      <div className="mt-4">
        <label className="block text-gray-700">Confirm Password</label>
        <input
          type="password"
          name=""
          id=""
          placeholder="Confirm Password "
          minlength="6"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
          required
        />
      </div>

      <LoginButton />
    </form>
  );
};

export default SignupForm;
