import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";
import { collection,getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)
  
  const nav = useNavigate()
  const {dispatch}= useContext(AuthContext)
  const handleLogin = async (e) => {
   
    e.preventDefault();
setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
     const user = userCredential.user;

     const adminDocRef = doc(collection(db, "admin"), user.uid);

     try {
       const adminDoc = await getDoc(adminDocRef);
const adminData = adminDoc.data();
console.log(adminData);
       dispatch({type:"LOGIN",payload:adminData})
         
     } catch (error) {
       console.error("Error getting document:", error);
     }

       
      nav("/")
      setError(false); // Reset error state on successful login
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
   
  };



   
  return (
    <div class="flex items-center justify-center h-screen border bg-purple-200">
      <div class="flex flex-col items-center justify-center border  w-2/5 h-5/6 relative bg-white rounded ">
        <span class=" text-5xl font-mono absolute top-8 text-purple-700">
          Admin Login
        </span>
        <form
          className="flex flex-col items-center gap-4 text-lg "
          onSubmit={handleLogin} // Renamed from HandleLogin to follow camelCase convention
        >
          <input
            type="email"
            placeholder="Email or username"
            className="focus:outline-none text-gray-500 border font-light border-purple-900 rounded p-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="focus:outline-none text-gray-500 border rounded p-1 border-purple-900 font-light"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loading ? (
            <button
              className="border border-purple-900 px-6 flex items-center justify-between py-1  rounded bg-purple-400 text-white"
              type="submit"
            >
              <CircularProgress color="inherit"  size={22}/>
            </button>
          ) : (
            <button
              className="border border-purple-900 px-3 rounded bg-purple-400 text-white"
              type="submit"
            >
              Login
            </button>
          )}
          <Link
            to="/register"
            class="text-xs text-gray-400 underline hover:text-purple-400"
          >
            register
          </Link>
          {error && (
            <span className="text-red-500">Wrong email or password</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
