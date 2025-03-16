import { FaHandsHelping } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav
        id="nav"
        className="flex flex-row w-full justify-between items-center  px-2 py-2 bg-sky-500/25 h-[3em]"
      >
        <div id="logo" className="flex items-center space-x-1 text-xl">
          <FaHandsHelping />
          <h1 className="text-zinc-500">Scriptee.me</h1>
        </div>
        <ul className="flex space-x-4 ">
          <li className="hover:text-blue-600">
            <a href="#">SingUp</a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#">SignIn</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
