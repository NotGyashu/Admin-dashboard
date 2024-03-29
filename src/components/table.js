import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import ThemeContext from "../context/themecontext";
export const List = () => {
  const { darkMode } = useContext(ThemeContext);
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <div
      class={`m-3  text-sm  rounded-sm overflow-x-scroll ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            class={`m-3 text-sm border rounded-sm ${
              darkMode ? "bg-[#200c30] text-white" : "bg-white"
            }`}
          >
            <TableRow>
              <TableCell class="p-4 ">Tracking ID</TableCell>
              <TableCell class="">Product</TableCell>
              <TableCell class="">Customer</TableCell>
              <TableCell class="tableCell">Date</TableCell>
              <TableCell class="tableCell">Amount</TableCell>
              <TableCell class="tableCell">Payment Method</TableCell>
              <TableCell class="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                class={`border ${
                  darkMode ? "bg-[#200c30] text-white" : "bg-white"
                }`}
              >
                <TableCell class="p-4 text-sm">
                  {row.id}
                </TableCell>

                <TableCell class="p-4">
                  <div class="flex items-center">
                    <img
                      src={row.img}
                      alt="orry"
                      class="m-1 h-7 w-7 rounded-full"
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell class="p-4 text-sm">
                  {row.customer}
                </TableCell>
                <TableCell class="p-4 text-sm">
                  {row.date}
                </TableCell>
                <TableCell class="p-4 text-sm">
                  {row.amount}
                </TableCell>
                <TableCell class="p-4 text-sm">
                  {row.method}
                </TableCell>
                <TableCell
                  style={{
                    color:
                      row.status === "Pending"
                        ? "rgba(229, 190, 82,1)"
                        : "rgba(4, 135, 56,1)",
                  }}
                >
                  <span
                    style={{
                      backgroundColor:
                        row.status === "Pending"
                          ? "rgba(229, 190, 82, 0.2)"
                          : "rgba(4, 135, 56, 0.2)",
                    }}
                    class="rounded p-1"
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
