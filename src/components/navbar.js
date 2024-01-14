import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ThemeContext from "../context/themecontext";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
const Navbar = () => {
  const { currentUser: admin } = useContext(AuthContext);
   const { darkMode, setDarkMode } = useContext(ThemeContext);

   const toggleDarkMode = () => {
     setDarkMode(!darkMode);
   };
  return (
    <div class="flex justify-between p-3">
      <div
        class={`flex border  h-8 w-auto p-1 ml-5 ${
          darkMode ? "border-white stroke-white fill-white " : " border-black"
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          class={` ${
            darkMode
              ? "focus:outline-none text-gray-100 bg-[#200c30]"
              : "focus: outline-none text-gray-400"
          }`}
        ></input>
        <SearchOutlinedIcon />
      </div>
      <div class="flex mr-5 items-center justify-center">
        <div
          class={`ml-4 ${
            darkMode
              ? " stroke-white text-white"
              : "fill-none stroke-neutral-400"
          }  flex`}
        >
          <LanguageOutlinedIcon />
          English
        </div>
        <div
          class={`ml-4 ${
            darkMode ? " stroke-white" : "fill-none stroke-neutral-400"
          } `}
        >
          <DarkModeOutlinedIcon onClick={toggleDarkMode} />
        </div>
        <div
          class={`ml-4 ${
            darkMode ? " stroke-white" : "fill-none stroke-neutral-400"
          }`}
        >
          <FullscreenExitOutlinedIcon />
        </div>
        <div
          class={`ml-4 ${
            darkMode ? " stroke-white" : "fill-none stroke-neutral-400"
          } `}
        >
          <NotificationsNoneOutlinedIcon />
          <div
            class={`h-3 w-3 bg-red-600 flex rounded-full relative top-[-1.5rem] right-[-.75rem] text-white text-xs   items-center justify-center `}
          >
            1
          </div>
        </div>
        <div
          class={`ml-4 ${
            darkMode ? " stroke-white" : "fill-none stroke-neutral-400"
          } `}
        >
          <ChatBubbleOutlineOutlinedIcon />
          <div class="h-3 w-3 bg-red-600 flex rounded-full relative top-[-1.5rem] right-[-.75rem] text-white text-xs   items-center justify-center">
            2
          </div>
        </div>
        <div
          class={`ml-4 ${
            darkMode ? " stroke-white" : "fill-none stroke-neutral-400"
          } `}
        >
          <ListOutlinedIcon />
        </div>
        <div
          class={`ml-4 ${
            darkMode ? " stroke-white" : "fill-none stroke-neutral-400"
          } `}
        >
          <img
            src={`${admin.img}`}
            alt="here"
            class="h-10 w-10 rounded-full ml-2 border border-purple-500 "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
