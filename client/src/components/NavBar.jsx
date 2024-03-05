import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const { isLoggedIn, signIn, signOut } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    signOut();
  };
  return (
    <div className="mt-2 mb-3">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            GeoGuessing
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/game">
                    Play
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/rank">
                    Rank
                  </Link>
                </li>
              )}

              {isLoggedIn && (
                <button className="btn btn-outline-dark ml-2" onClick={logout}>
                  Log out
                </button>
              )}
            </ul>
          </div>
          {isLoggedIn ? (
            <div className="">You are logged in</div>
          ) : (
            <div className="">You are logged out</div>
          )}
        </div>
      </nav>
    </div>
  );
}
