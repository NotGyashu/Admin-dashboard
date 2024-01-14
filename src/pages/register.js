import { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { registerInput } from "../formsource";
import { useEffect } from "react";
import {

  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () => {
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
                console.log("Unexpected upload state:", snapshot.state);
                // Additional handling for unexpected states
                break;
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

  

  const Register= async(e)=>{
    e.preventDefault()
    const loginBack = () => {
      console.log("worked");
      navigate("/login");
    };

      try{
              const newUserCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        const user = newUserCredential.user;

        if (user) {
          
          
          await setDoc(doc(db, "admin", user.uid), {
            ...data,
            timeStamp: serverTimestamp(),
          });

          loginBack();
        } else {
          console.error("User object not available");
        }
      }catch(err){
        console.log("error in registering",err)
      }
  }

  return (
    <div class="flex items-center justify-center h-screen  bg-purple-200">
      <div class="w-3/4  h-[90%]  bg-white rounded p-8 items-center flex flex-col gap-2">
        <div class=" text-5xl font-mono  text-purple-700 ">Register Here</div>

        <div class=" items-center justify-center flex border h-max">
          <div class="border items-center justify-center flex h-full ">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://i.pinimg.com/originals/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg"
              }
              class=" w-[50vw] h-[30vh] px-2 rounded-full "
              alt="img"
            ></img>
          </div>
          <form class="flex flex-wrap gap-10 p-4 border" onSubmit={Register}>
            <div class="w-2/5">
              image:
              <label htmlFor="file">
                <DriveFolderUploadIcon style={{ color: "#9003fc" }} />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                class="hidden cursor-pointer focus:outline-none"
              />
            </div>
            {registerInput.map((input) => (
              <div key={input.id} class="w-2/5 ">
                <label class=" ">{input.label}</label> <br></br>
                <input
                  type={input.type}
                  class="  focus: outline-none font-light"
                  id={input.id}
                  onChange={serverInput}
                />
                <hr></hr>
                <hr></hr>
              </div>
            ))}
            <button
              className={`text-white justify-center items-center rounded w-40 h-7 px-4 ${
                per !== null && per < 100
                  ? "bg-purple-200 cursor-not-allowed"
                  : "bg-purple-500"
              }`}
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        <span
          class="text-purple-400 underline cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          already have an account ?
        </span>
      </div>
    </div>
  );
};

export default Register;
