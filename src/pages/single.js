import { Chart } from "../components/chart";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { List } from "../components/table";
const Single = () => {
  return (
    <div class="w-screen max-h-screen  ">
      <div className="w-full">
        <Navbar />
        <hr />
      </div>
      <div class="flex w-full">
        <Sidebar />
        <div className="lg:w-[80%]  w-full max-h-screen flex-col flex overflow-y-scroll">
          <div class="flex items-center lg:m-4 flex-col md:flex-row">
            <div class="box-shadow flex-[3] m-6 p-4 rounded-sm relative">
              <button class="border px-1 absolute top-0 right-0 text-purple-500 bg-purple-100">
                edit
              </button>
              <div class="text-gray-400 m-2 ">Information</div>
              <div class="flex items-center gap-6 ">
                <img
                  src=""
                  alt="i cant put it"
                  class="h-20 w-20 md:h-28 md:w-28 rounded-full  border"
                ></img>
                <div class="flex flex-col gap-1">
                  <span class=" text-xl md:text-2xl text-gray-500  font-medium">
                    Jhon doe
                  </span>
                  <span class="text-gray-500 ">
                    Email:<span class="text-gray-400">Jhon@gmail.com</span>
                  </span>
                  <span class="text-gray-500 ">
                    Phone:
                    <span class="text-gray-400 ">+91 713982798</span>
                  </span>
                  <span class="text-gray-500 ">
                    Address: <span class="text-gray-400 ">berlin</span>
                  </span>
                  <span class="text-gray-500 ">
                    Country: <span class="text-gray-400 ">germany</span>
                  </span>
                </div>
              </div>
            </div>
            <Chart aspect={3 / 1} title="User spending (Last 6 months)" />
          </div>
          <div class="box-shadow p-4 m-4 text-gray-600">
            <div>Last Transaction</div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
