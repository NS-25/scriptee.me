import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      {/* <h1 className="text-green-700">Hello George</h1> */}
{/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      {/* <div>
        <SignIn />
      </div> */}
    </>
  );
}

export default App;
