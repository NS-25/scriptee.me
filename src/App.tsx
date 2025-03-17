import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const location = useLocation();
  return (
    <>
      {/* Show Navbar only if the user is on the Home page */}

      {location.pathname === "/" && <Navbar />}
      <Routes>
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
