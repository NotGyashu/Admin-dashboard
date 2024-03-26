import { Datatable } from "../components/datatable";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const List = () => {

  return (
    <div class=" w-screen max-h-screen  ">
      <div className="w-full">
        <Navbar />
        <hr />
      </div>

      <div class="flex w-full">
        <Sidebar />
        <div className="lg:w-[80%]  w-full max-h-screen flex-col flex overflow-y-scroll">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default List;
