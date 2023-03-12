import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { myUser } = useContext(AuthContext);
  console.log(myUser);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>React Movie App</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
            <h5 className="mb-0 text-capitalize"> {myUser?.displayName} </h5>
            {!myUser ? (
              <Link to="/login" className="ms-2 btn btn-outline-light">
                Login
              </Link>
            ) : (
              <button
                onClick={() => logOut()}
                className="ms-2 btn btn-outline-light"
              >
                Logout
              </button>
            )}
            <Link to="/register" className="ms-2 btn btn-outline-light">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
