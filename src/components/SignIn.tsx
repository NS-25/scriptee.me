const SignIn = () => {
  return (
    <>
      <div className="flex flex-col max-w-lg min-h-60  bg-gray-100">
        <div id="heading" className="space-y-2">
          <h2 className="text-2xl font-bold text-center">
            Sign in to your account
          </h2>
          <p className="text-center">
            Enter your email and password to access your account
          </p>
        </div>
        <form>
          <div id="email" className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              required
              className="border-2 border-gray-700 focus:border-blue-600 rounded-sm "
            />
          </div>
          <div id="password">
            <div
              id="link"
              className="flex flex-row items-center justify-around"
            >
              <label htmlFor="password" className="font-semibold">
                Password
              </label>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="........."
              required
              className=" w-full border-2 border-gray-700 focus:border-blue-600 rounded-sm"
            />
          </div>

          <button type="submit" className="w-full my-6 border">
            Sign In
          </button>
          <div className="flex flex-row text-center text-sm text-gray-500 justify-center space-x-1">
            <p>Don't have an account?</p>
            <a href="#" className="text-gray-900 hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignIn;
