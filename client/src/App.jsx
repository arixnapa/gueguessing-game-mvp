import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import AuthContext from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function signIn() {
    setIsLoggedIn(true);
  }

  function signOut() {
    setIsLoggedIn(false);
  }

  const authObject = {
    isLoggedIn,
    signIn,
    signOut,
  };
  return (
    <AuthContext.Provider value={authObject}>
      <div className="container text-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game"
            element={
              <RequireAuth>
                <Game />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
