import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
// import GoogleMaps from "./components/GoogleMaps";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Game from "./pages/Game";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="container text-center">
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/game" className="nav-link">
              Play
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/results" className="nav-link">
              Results
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
