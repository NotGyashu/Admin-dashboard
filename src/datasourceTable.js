import React, { useContext } from "react";
import ThemeContext from "./context/themecontext";

const UserCell = ({ row }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex items-center ${
        darkMode ? "text-gray-200" : "text-gray-900"
      }`}
    >
      <img className="w-8 h-8 rounded-full mr-5 border border-purple-800" src={row.img} alt="hehe" />
      {row.username || row.title}
    </div>
  );
};

export const userColumns = [

  { field: "id", headerName: "ID", width: 70 },

  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (params) => <UserCell row={params.row} />,
  },

  {
    field: "email",
    headerName: "Email",
    width: 230
  },
  { field: "organisation", headerName: "Organisation", width: 135 },
  
  {
    field: "address",
    headerName: "Address",
    width: 150,
   
    },
  
];

export const productCols = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "title",
    headerName: "Title",
    width: 200,
    renderCell: (params) => <UserCell row={params.row} />,
  },
  {
    field: "description",
    headerName: "Description",
    width: 130,
  },
  {
    field: "category",
    headerName: "Category",
    width: 130,
  },
  {
    field: "price",
    headerName: "Price",
    width: 130,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 130,
  },
];


