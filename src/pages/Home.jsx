import { createBrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <div className="gap-2 m-4 inline-block">
        <input
          type="text"
          placeholder="Reciever IP"
          className="border border-black py-2 px-3"
        />
        <button className="border border-black py-2 px-3 ml-2">Connect</button>
      </div>
    </div>
  );
}

export default Home;
