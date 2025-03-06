import { createBrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <div className="buttons-container flex flex-col">
        <button className="border border-black p-2 rounded-lg">
          Global chat log
        </button>
        <button className="border border-black p-2 rounded-lg">
          global authenticated chat log
        </button>
        <button className="border border-black p-2 rounded-lg">
          specific user chat log
        </button>
        <button className="border border-black p-2 rounded-lg">
          specific authenticated user chat log
        </button>
        <button className="border border-black p-2 rounded-lg">
          server chat log
        </button>
        <button className="border border-black p-2 rounded-lg">
          server authenticated chat log
        </button>
      </div>
    </div>
  );
}

export default Home;
