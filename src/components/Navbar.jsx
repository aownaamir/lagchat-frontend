import { NavLink } from "react-router-dom";
import Chat from "../svgs/Chat";
import Home from "../svgs/Home";
import Server from "../svgs/Server";
import Settings from "../svgs/Settings";

function Navbar() {
  return (
    <div className="w-[10%] border border-black flex flex-col items-center rounded-lg">
      <ul className="flex flex-col gap-7 mt-7">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
            <Home className="w-[35px] h-[35px]" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <Settings className="w-[35px] h-[35px]" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/server"
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <Server className="w-[35px] h-[35px]" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chat"
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <Chat className="w-[35px] h-[35px]" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
