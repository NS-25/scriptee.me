import { FaHandsHelping } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav id="nav" className="flex flex-row w-full justify-between px-2 py-2">
        <div id="logo" className="flex">
          <FaHandsHelping />
          <h1>Scriptee.me</h1>
        </div>
        <ul className="flex space-x-4">
          <li>SignUp</li>
          <li>SignIn</li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
