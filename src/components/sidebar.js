import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AndroidIcon from "@mui/icons-material/Android";
import HubIcon from "@mui/icons-material/Hub";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import ThemeContext from "../context/themecontext";
import { AuthContext } from "../context/authcontext";
import { Link, useNavigate } from "react-router-dom";
import SideContext from "../context/sideContext";
import CloseIcon from "@mui/icons-material/Close";
const Sidebar = () => {
  const { currentUser: admin } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const { open, setOpen } = useContext(SideContext);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div
      class={`max-h-screen border-r-2 lg:w-[20%] z-10 md:z-0 overflow-y-scroll ${
        open ? " animate-fadeIn flex absolute l-0 bg-white" : "hidden md:flex"
      } border border-r    flex-col`}
    >
      <hr class="h-2"></hr>
      <ul class="p-2 pl-5 ">
        <p
          class={`text-xs flex items-center justify-between ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          MAIN
          <div
            class={`p-3 md:hidden ${
              darkMode
                ? "hover:bg-slate-500 rounded text-white"
                : "hover:bg-purple-100"
            } cursor-pointer flex items-center`}
          >
            <CloseIcon
              style={{ color: "#6b21a8" }}
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
        </p>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
          onClick={() => {
            navigate("/");
            setOpen(!open);
          }}
        >
          <DashboardIcon style={{ color: "#6b21a8" }} />
          &nbsp; Dashboard
        </li>
        <p class={`text-xs ${darkMode ? "text-white" : "text-black"}`}>LISTS</p>
        <Link to="/users">
          <li
            class={`p-3 ${
              darkMode
                ? "hover:bg-slate-500 rounded text-white"
                : "hover:bg-purple-100"
            } cursor-pointer flex items-center`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <PersonIcon style={{ color: "#6b21a8" }} />
            &nbsp;Users
          </li>
        </Link>
        <Link to="/products">
          <li
            class={`p-3 ${
              darkMode
                ? "hover:bg-slate-500 rounded text-white"
                : "hover:bg-purple-100"
            } cursor-pointer flex items-center`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Inventory2Icon style={{ color: "#6b21a8" }} />
            &nbsp;Products
          </li>
        </Link>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
        >
          <BorderAllIcon style={{ color: "#6b21a8" }} />
          &nbsp;Orders
        </li>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
        >
          <LocalShippingIcon style={{ color: "#6b21a8" }} />
          &nbsp; Delivery
        </li>
        <p class={`text-xs ${darkMode ? "text-white" : "text-black"}`}>
          USEFUL
        </p>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
        >
          <BarChartIcon style={{ color: "#6b21a8" }} />
          &nbsp; stats
        </li>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
        >
          <NotificationsIcon style={{ color: "#6b21a8" }} />
          &nbsp;Notifications
        </li>
        <p class={`text-xs ${darkMode ? "text-white" : "text-black"}`}>
          SERVICE
        </p>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
        >
          <AndroidIcon style={{ color: "#6b21a8" }} />
          &nbsp; System health
        </li>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
        >
          <HubIcon style={{ color: "#6b21a8" }} />
          &nbsp; Logs
        </li>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
        >
          <SettingsIcon style={{ color: "#6b21a8" }} />
          &nbsp; Settings
        </li>
        <p class={`text-xs ${darkMode ? "text-white" : "text-black"}`}>USER</p>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
        >
          <AccountBoxIcon style={{ color: "#6b21a8" }} />
          &nbsp; Profile
        </li>
        <li
          class={`p-3 ${
            darkMode
              ? "hover:bg-slate-500 rounded text-white"
              : "hover:bg-purple-100"
          } cursor-pointer flex items-center`}
          onClick={logout}
        >
          <LogoutIcon style={{ color: "#6b21a8" }} />
          &nbsp; Logout
        </li>
      </ul>
      <div class="flex mt-1 mb-5 ml-7">
        <div class="h-6 w-6 mr-2 rounded-md bg-slate-100 border border-black-100 cursor-pointer"></div>
        <div class="h-6 w-6 mr-2 rounded-md bg-black border border-black-100 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Sidebar;
