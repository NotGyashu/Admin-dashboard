import { useContext } from "react";
import { Chart } from "../components/chart";
import { Featured } from "../components/featured";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { List } from "../components/table";
import { Widgets } from "../components/widgets";
import ThemeContext from "../context/themecontext";
import SideContext from "../context/sideContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const { open } = useContext(SideContext);
  return (
    <div class=" w-screen max-h-screen   ">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full flex">
        <Sidebar />
        <div class="lg:w-[80%]  w-full max-h-screen flex-col flex overflow-y-scroll">
          <hr></hr>
          <div class="flex justify-center  flex-wrap ">
            <Widgets type="user" />
            <Widgets type="order" />
            <Widgets type="earning" />
            <Widgets type="balance" />
          </div>
          <div class="lg:flex-row flex-col flex  items-center ">
            <Featured />
            <Chart aspect={2 / 1} title="Last 6 months revenue " />
          </div>
          <div
            class={`box-shadow p-4 m-4 ${
              darkMode ? "text-white" : "text-gray-600"
            } `}
          >
            <div>Latest Transaction</div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
