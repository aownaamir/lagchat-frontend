import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "./Home";

function AppLayout() {
  return (
    <div className="flex h-screen p-4 justify-between">
      <Navbar />
      <Main />
      <Sidebar />
    </div>
  );
}

export default AppLayout;
