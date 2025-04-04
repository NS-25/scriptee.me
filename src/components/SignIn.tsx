import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../services/firebase";
import useAuth from "../hooks/useAuth";

const SignIn = () => {
  const navigate = useNavigate();
  // const functionReturn = useAuth();
  // console.log("functionReturn : ", functionReturn);

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sign in for fibase codes.
  const handleSignIn = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        console.log(res)
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Function to handle click and navigate
  const handleSignInRedirect = (e) => {
    e.preventDefault(); // Prevent the default <a></a> behavior
    navigate("/signup");
  };
  ///////////////

  return (
    <Layout>
      <div
        id="container"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="flex flex-col max-w-lg min-h-60   p-8 bg-white border border-gray-300 rounded-md">
          <div id="heading" className="space-y-1">
            <h2 className="text-2xl font-bold text-center">
              Sign in to your account
            </h2>
            <p className="text-center">
              Enter your email and password to access your account
            </p>
          </div>
          <form>
            <div id="email" className="flex flex-col p-2">
              <label htmlFor="email" className="font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="  border border-gray-300 focus:border-blue-600 rounded-sm p-1 px-2 "
              />
            </div>
            <div id="password">
              <div id="link" className="flex flex-col p-2">
                <label htmlFor="password" className="font-semibold mb-2 ">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="........."
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 focus:border-blue-600 rounded-sm p-1 px-2"
                />
                <button
                  type="submit"
                  onClick={handleSignIn}
                  className="w-full my-6 border rounded-sm bg-black text-white p-2 cursor-pointer hover:opacity-70"
                >
                  Sign In
                </button>
              </div>
            </div>

            <div id="links" className="flex justify-around space-x-10">
              <div className="flex flex-row text-center text-sm text-gray-500 space-x-1">
                <p>Don't have an account?</p>
                <a
                  href="/signup"
                  onClick={handleSignInRedirect}
                  className="text-gray-900  hover:underline"
                >
                  Sign up
                </a>
              </div>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default SignIn;
