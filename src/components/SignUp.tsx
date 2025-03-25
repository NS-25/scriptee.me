import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const SignUp = () => {
  const navigate = useNavigate();

  // using firebase sign up setup..
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // firebase setup..
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential - Signup : ", userCredential);
        //Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/signin");
      })
      .catch((error) => {
        console.log("Error Signup : ", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignInRedirect = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <Layout>
      <div
        id="wrapper"
        className=" p-4 min-h-[calc(100vh-3em)] grid place-items-center"
      >
        <div className="border max-w-lg min-w-lg rounded-md border-gray-300">
          <form className="p-8">
            <h2 className="text-3xl font-semibold mb-2 ">Create an account</h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter your information to get started
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className=" flex flex-col gap-2">
                <label htmlFor="fullname" className="text-sm font-bold">
                  Full Name
                </label>
                <input
                  type="name"
                  placeholder="Nyunt Sein"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="border py-3 px-4 text-sm rounded-md border-gray-300"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border py-3 px-4 text-sm rounded-md border-gray-300"
                />
              </div>
              <div className=" flex flex-col gap-4">
                <label htmlFor="password" className="text-sm font-bold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border py-3 px-4 text-sm rounded-md border-gray-300"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="confirm-password" className="text-sm font-bold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border py-3 px-4 text-sm rounded-md border-gray-300"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="border w-full py-3 bg-black text-white rounded-md font-semibold cursor-pointer hover:bg-black/80"
            >
              Sign Up
            </button>
          </form>
          {/* <hr /> */}
          <div className="border-t border-t-gray-300 flex flex-row items-center justify-center py-4 gap-2">
            <p className="text-gray-600">Already have an account?</p>
            <a
              href="/signin"
              onClick={handleSignInRedirect}
              className="hover:underline"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
