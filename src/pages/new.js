import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,

} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { productInputs } from "../formsource";
import { AuthContext } from "../context/authcontext";

const New = ({ inputs, title }) => {

  const {currentUser:admin} = useContext(AuthContext)
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [per, setPer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setPer(progress);

            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
                default:
                  console.log("default");
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setData((prev) => ({
                ...prev,
                img: downloadURL,
              }));
              console.log("File available at", downloadURL);
            });
          }
        );
      }
    };

    uploadFile();
  }, [file]);

  const serverInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const HandleAdd = async (e) => {
    e.preventDefault();

    const handleNavigateBack = () => {
      console.log("worked");
      navigate(-1);
    };

    const newUser = async () => {
    
          await addDoc(collection(db, "users"), {
            ...data,
            timeStamp: serverTimestamp(),
          });

          handleNavigateBack();
        
    
    };

    const newProduct = async () => {
      try {
        await addDoc(collection(db, "products"), {
          ...data,
          timeStamp: serverTimestamp(),
        });

        handleNavigateBack();
      } catch (error) {
        console.error("Error adding new product:", error.message);
      }
    };

    try {
      inputs === productInputs ? newProduct() : newUser();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div class="grid grid-cols-6 h-full ">
      <Sidebar admin={admin} />
      <div class="col-span-5">
        <Navbar admin={admin} />
        <hr></hr>
        <div class=" box-shadow m-4 text-xl text-gray-300 rounded p-2 box-shadow">
          {title}
        </div>
        <div class=" grid grid-cols-3 gap-2   justify-around m-4 box-shadow p-2 ">
          <div class="border col-span-1 items-center justify-center flex ">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RvHVaAP5IE38i3GnBxUDfxuVh2rEyaWgqg&usqp=CAU"
              }
              alt="img"
              class="h-40 w-40  "
            ></img>
          </div>
          <div class=" col-span-2 border p-3 relative">
            <form
              class="flex flex-wrap gap-10 items-center "
              onSubmit={HandleAdd}
            >
              <div class="my-2 w-2/5">
                image:
                <label htmlFor="file">
                  <DriveFolderUploadIcon />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  class=" hidden cursor-pointer focus: outline-none"
                />
              </div>
              {inputs.map((input) => (
                <div class="my-0 w-2/5" key={input.id}>
                  <label>{input.label}</label> <br></br>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    class="  text-gray-400 focus: outline-none"
                    onChange={serverInput}
                    id={input.id}
                  />
                  <hr></hr>
                  <hr></hr>
                </div>
              ))}

              <button
                className={`text-white justify-center items-center rounded w-40 h-7 px-4 ${
                  per !== null && per < 100
                    ? "bg-purple-200 cursor-not-allowed"
                    : "bg-purple-800"
                }`}
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
