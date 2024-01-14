import { DataGrid } from "@mui/x-data-grid";
import { userColumns,productCols } from "../datasourceTable";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/themecontext";
import { collection, } from "firebase/firestore";
import { db } from "../firebase";
import { doc, deleteDoc, onSnapshot } from "firebase/firestore";

export const Datatable = () => {
 

  const firstPath = window.location.pathname.split("/")[2];
  const firstPathSegment = firstPath==="users"?"users":"products"
  const firstPathSegment2 = firstPath==="users"?"customers":"products"
  const firstPathSegment3 =
    firstPath === "users"
      ? Object.values(userColumns)
      : Object.values(productCols);
  const link = firstPathSegment==="users"?"/users/new":"/products/new";

  const { darkMode } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  //fetching the user list form fb in real time
  useEffect(() => {
    //Listen real
    const unsub = onSnapshot(
      collection(db, firstPathSegment),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [firstPathSegment,data]);


  //delete a entry from db
  const Handledelete = async (id) => {
    await deleteDoc(doc(db, firstPathSegment, id));
    setData(data.filter((item) => item.id !== id));
  };

  //action column
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <div class={`flex items-center gap-8`}>
            <Link to="/users/1234">
              <div class=" text-blue-500 border p-1 rounded-md cursor-pointer bg-white">
                view
              </div>
            </Link>
            <div
              class="text-red-500 border p-1 rounded-md  cursor-pointer bg-white"
              onClick={() => Handledelete(params.row.id)}
            >
              delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div class={` p-2 relative  ${darkMode ? "text-gray-200" : "text-black"}`}>
      <span class="text-gray-400 text-xl m-2">All {firstPathSegment2}</span>
      <Link
        to={link}
        class=" cursor-pointer border border-purple-300 text-purple-500  absolute right-3 rounded px-2 "
      >
        <div>Add New</div>
      </Link>

      <DataGrid
        style={{ color: darkMode ? "white" : "black" }}
        rows={data}
        columns={[...firstPathSegment3, ...actionColumn]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
