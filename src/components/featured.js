import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import { useContext } from "react";
import ThemeContext from "../context/themecontext";
export const Featured = () => {
   const { darkMode } = useContext(ThemeContext);

  return (
    <div class="box-shadow flex-[3] m-6 p-4 rounded-sm">
      <div
        class={` flex justify-between ${
          darkMode ? "text-gray-200" : " text-gray-400"
        }`}
      >
        <span>Total revenue</span>
        <MoreVertTwoToneIcon />
      </div>

      <div class=" mr-24 ml-24 mt-2">
        <CircularProgressbar value={70} text="70%" strokeWidth={3} />
      </div>
      <div class=" flex items-center flex-col pt-2">
        <p class={` text-md ${darkMode ? "text-gray-200" : " text-gray-400"}`}>
          Total sales made today
        </p>
        <p
          class={` text-2xl pt-3 ${darkMode ? "text-gray-200" : " text-black"}`}
        >
          $420
        </p>
        <p
         
          class={` text-sm   self-center pt-3 p-4  ${
            darkMode ? "text-gray-200" : " text-black"
          }`}
        >
          Previous transactions processing.Last Payments may not be included.
        </p>
        <div class="flex gap-6">
          <div class="flex flex-col items-center">
            <p class="p-2 text-sm font-medium text-gray-400">Target</p>
            <span class="text-green-600">
              <KeyboardArrowUpTwoToneIcon />
              <span class="font-medium">$12.9k</span>
            </span>
          </div>

          <div class="flex flex-col items-center justify-between">
            <p class="p-2 text-sm  font-medium text-gray-400">Last Week</p>
            <span class="text-green-600">
              <KeyboardArrowUpTwoToneIcon />
              <span class="font-medium">$12.9k</span>
            </span>
          </div>
          <div class="flex flex-col items-center justify-between">
            <p class="p-2 text-sm font-medium text-gray-400">Last Month</p>
            <span class="text-red-600">
              <KeyboardArrowDownTwoToneIcon />
              <span class="font-medium">$12.9k</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
