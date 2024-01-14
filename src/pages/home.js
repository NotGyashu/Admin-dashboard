import { useContext } from "react";
import { Chart } from "../components/chart";
import { Featured } from "../components/featured";
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import { List } from "../components/table";
import { Widgets } from "../components/widgets";
import ThemeContext from "../context/themecontext";

const Home = ()=>{

  const { darkMode } = useContext(ThemeContext);
return (
  <div class="grid grid-cols-6 h-full overscroll-y-contain ">
    <Sidebar  />
    <div class="col-span-5">
      <Navbar />
      <hr></hr>
      <div class="flex justify-center flex-wrap ">
        <Widgets type="user" />
        <Widgets type="order" />
        <Widgets type="earning" />
        <Widgets type="balance" />
      </div>
      <div class="flex items-center m-4">
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
);
}

export default Home