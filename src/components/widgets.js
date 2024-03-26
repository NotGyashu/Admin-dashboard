import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/themecontext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export const Widgets = ({ type }) => {
  const { darkMode } = useContext(ThemeContext);
  let data;
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <Person2OutlinedIcon
            class="flex self-end h-5 rounded-md bg-red-300 "
            htmlColor="red"
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "view all orders",
        icon: (
          <ShoppingCartOutlinedIcon class="flex self-end h-5 bg-blue-400 rounded-md" />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: " view total earnings",
        icon: (
          <MonetizationOnOutlinedIcon class="flex self-end h-5 rounded-md bg-green-400" />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "get total balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon class="flex self-end h-5 rounded-md bg-orange-300" />
        ),
      };
      break;

    default:
      break;
  }
  useEffect(() => {
    const fetchdata = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );

      const prevMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);

      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };

    fetchdata();
  }, []);

  return (
    <div class="max-w-full  w-56 h-32 box-shadow rounded-md m-4 flex justify-between p-2">
      <div class="flex flex-col justify-between">
        <span class={`text-sm ${darkMode ? "text-white" : "text-gray-500"} `}>
          {data.title}
        </span>
        <span
          class={`text-3xl font-light ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {data.isMoney && "$"}
          {amount}
        </span>
        <span
          class={`text-sm custom-underline ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {data.link}
        </span>
      </div>
      <div
        class={`flex flex-col justify-between ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <span>
          {diff > 0 ? (
            <>
              <KeyboardArrowUpIcon />
              <span className="text-green-600 font-medium">{diff} % </span>
            </>
          ) : (
            <>
              <KeyboardArrowDownIcon />
              <span className="text-red-600 font-medium">{diff} % </span>
            </>
          )}
        </span>

        {data.icon}
      </div>
    </div>
  );
};
