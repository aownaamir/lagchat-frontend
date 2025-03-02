import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="w-[70%] border border-black rounded-lg">
      <Outlet />
    </div>
  );
}

export default Main;
