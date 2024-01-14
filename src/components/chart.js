
import React from "react";import {
  AreaChart,
  Area,
  XAxis,

  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import ThemeContext from "../context/themecontext";

const data = [
  {name:"january",Total:300},
  {name:"february",Total:900},
  {name:"march",Total:400},
  {name:"april",Total:1100},
  {name:"may",Total:700},
  {name:"april",Total:1000},
   
];

export const Chart = ({aspect, title}) => {
   const { darkMode,  } = useContext(ThemeContext);
  
  return (
    <div
      class={`box-shadow flex-[6] w-[60%] p-3 rounded-sm  ${
        darkMode ? "text-gray-200" : " text-gray-600"
      }`}
    >
      <div class={` ${darkMode ? "text-gray-200" : " text-gray-600"}`}>
        {title}
      </div>
      <ResponsiveContainer width="100%" stroke="gray" aspect={aspect}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />

          <CartesianGrid
            strokeDasharray="3 3"
            style={{ stroke: darkMode ? "#f7f5f5" : "rgb(228, 225, 225)" }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#Total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
