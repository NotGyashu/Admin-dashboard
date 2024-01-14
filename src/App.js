import Home from "./pages/home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import List from "./pages/list";
import Single from "./pages/single";
import New from "./pages/new";
import ThemeContext from "../src/context/themecontext";
import { productInputs, userInputs } from "./formsource";
import { useContext, useState } from "react";
import { AuthContext } from "./context/authcontext";
import Register from "./pages/register";
export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { currentUser } = useContext(AuthContext);

  
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
 

  

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div class={`${darkMode ? " bg-[#200c30]" : "bg-white"}`}>
        <BrowserRouter basename="/Admin-dashboard">
          <Routes>
            <Route Path="/">
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="users">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":userId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New inputs={userInputs} title="Add New Customer" />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="products">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":productId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New inputs={productInputs} title="Add New Produdct" />
                    </RequireAuth>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};
