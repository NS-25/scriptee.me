import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      {/* <h1 className="text-green-700">Hello George</h1> */}
      <Navbar />
      <div>
        <SignUp />
      </div>
      <div>
        <SignIn />
      </div>
    </>
  );
}

export default App;
