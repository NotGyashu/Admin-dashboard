import { Datatable } from "../components/datatable";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const List = () => {

  return (
    <div class="grid grid-cols-6 h-full ">
      <Sidebar  />
      <div class="col-span-5">
        <Navbar />
        <hr></hr>
        <Datatable />
      </div>
    </div>
  );
};

export default List;
