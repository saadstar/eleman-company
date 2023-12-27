import React, { useContext   }  from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext/authContext";
import { toast } from 'react-toastify';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import StoreIcon from "@mui/icons-material/Store";
import AirplayIcon from "@mui/icons-material/Airplay";
import PaidIcon from "@mui/icons-material/Paid";

export const Navbar = () => {
    const { dispatch, user } = useContext(AuthContext);
  const navigate = useNavigate("");

    const logout = async() => {
        try {
               dispatch({ type: "LOGOUT" });
          localStorage.removeItem("user");
          navigate("/");
          toast.error("تم تسجيل الخروج!")
        } catch (err) {
            console.log(err);
        }
    }
    
  return (
    <div className="navBar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid axin ">
          <div className="icons">
            <div className="user">
              <span>{user === null ? "User" : `${user.firstName}`}</span>
            </div>
            {user !== null && (
              <i class="fa-solid fa-right-from-bracket" onClick={logout}></i>
            )}
          </div>
          <button
            class="navbar-toggler text-white bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation text-white"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {user !== null && (
              <div class="navbar-nav me-auto color-light mb-2 mb-lg-0 nAV">
                {user.isAdmin !== 3 && (
                  <Link
                    to="/process"
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-item  d-flex gap-3"
                  >
                    <h2>العمليات</h2>
                    <AirplayIcon className="m-auto" />
                  </Link>
                )}
                {user.isAdmin === 1 && (
                  <Link
                    to="/charts"
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-item d-flex gap-3"
                  >
                    <h2>التحليلات</h2>
                    <AutoGraphIcon className="m-auto" />
                  </Link>
                )}
                {user.isAdmin === 1 && (
                  <Link
                    to="/users"
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-item d-flex gap-3"
                  >
                    <h2>المستخدمين</h2>
                    <SupervisorAccountIcon className="m-auto" />
                  </Link>
                )}
                {user.isAdmin !== 2 && (
                  <Link
                    to="/store"
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-item d-flex gap-3"
                  >
                    <h2>المخازن</h2>
                    <StoreIcon className="m-auto" />
                  </Link>
                )}
                {user.isAdmin === 1  && (
                  <Link
                    to="/save"
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-item d-flex gap-3"
                  >
                    <h2>الخزنه</h2>
                    <AddModeratorIcon className="m-auto" />
                  </Link>
                )}
                {user.isAdmin === 2 && (
                  <Link
                    to="/save"
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-item d-flex gap-3"
                  >
                    <h2>الخزنه</h2>
                    <AddModeratorIcon className="m-auto" />
                  </Link>
                )}
                {user.isAdmin !== 2 && (
                  <Link
                    to="/car"
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-item d-flex gap-3"
                  >
                    <h2>السياره</h2>
                    <DirectionsCarIcon className="m-auto" />
                  </Link>
                )}
                {user.isAdmin !== 2 && (
                  <Link
                    to="/funders"
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-item d-flex gap-3"
                  >
                    <h2>الممولين</h2>
                    <PaidIcon className="m-auto" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
