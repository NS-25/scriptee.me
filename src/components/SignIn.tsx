const SignIn = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 py-12 sm:px-6 lg:px-8">
        <div id="heading" className="space-y-1">
          <h2 className="text-2xl font-bold text-center">
            Sign in to your account
          </h2>
          <p className="text-center">
            Enter your email and password to sign in
          </p>
        </div>
        <form className="space-y-4">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="name@example.com" required />
          <label htmlFor="password">Password</label>
          <a href="#">Forgot password</a>
          <input type="password" placeholder="........." required />

          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account?</p>
      </div>
    </>
  );
};
export default SignIn;
