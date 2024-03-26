import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThemeContext from "../context/themecontext";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authcontext";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SideContext from "../context/sideContext";
import Sidebar from "./sidebar";
const Navbar = () => {
  const { currentUser: admin } = useContext(AuthContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { open, setOpen } = useContext(SideContext);

  const toggleMore = (e) => {
    console.log("open");
    setOpen(!open);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div class="flex  justify-between   ">
      <div className="flex md:gap-10 items-center">
        <div
          class={`md:hidden ${
            darkMode ? " text-gray-200 " : " text-purple-700"
          } p-1  font-bold lg:text-3xl md:text-2xl flex justify-center `}
          onClick={toggleMore}
        >
          <MenuIcon />
        </div>
        <Link to="/">
          <h1
            class={` ${
              darkMode ? " text-gray-200" : " text-purple-700"
            } p-1  font-bold lg:text-3xl md:text-2xl flex justify-center `}
          >
            {admin.organisation}
          </h1>
        </Link>
        <div
          class={`hidden md:flex md:border  lg:h-8 h-6 w-auto px-1 items-center  ${
            darkMode ? "border-white stroke-white fill-white " : " border-black"
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            class={` lg:h-7 h-5 ${
              darkMode
                ? "focus:outline-none text-gray-100 bg-[#200c30]"
                : "focus: outline-none text-gray-400"
            }`}
          ></input>
          <SearchOutlinedIcon />
        </div>
      </div>
      <div class=" hidden md:flex mr-5 items-center justify-center border">
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
          <img
            src={`${admin.img}`}
            alt="here"
            class="lg:h-8 h-6 lg:w-8 w-6 rounded-full ml-2 border border-purple-500 "
          ></img>
        </div>
      </div>
      <div className="md:hidden relative mx-2 gap-3 flex items-center">
        <div
          class={` flex flex-col top-1 relative justify-between ${
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
          class={` ${
            darkMode ? " stroke-white" : "fill-none stroke-neutral-400"
          } `}
        >
          <DarkModeOutlinedIcon onClick={toggleDarkMode} />
        </div>

        <img
          src={`${admin.img}`}
          alt="here"
          class="lg:h-8 h-6 lg:w-8 w-6 rounded-full border border-purple-500 "
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
