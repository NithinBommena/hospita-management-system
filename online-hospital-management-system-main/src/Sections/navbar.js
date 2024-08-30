import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import hospitalLogo from "../Assets/hospital-logo.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

function NavBars() {
  const { data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  return (
    <div className="navStick">
      <ToastContainer />
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
            <img className="image-size" src={hospitalLogo} title="logo" alt="img" /> 
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/ourteam"} className="nav-link">
                Doctors
              </Link>
              <Link to={"/service"} className="nav-link">
                  Services
              </Link>
              <Link to={"/booking"} className="nav-link">
                Appointment
              </Link>
              {data?.isAuthenticated  && <Link to="/Report" className="nav-link">
                  Report
              </Link>}
              {data?.isAuthenticated ? (
                <Link
                  to=""
                  className="nav-link"
                  onClick={() => {
                    dispatch({ type: "AUTH_LOGOUT" });
                    notify("Logged out");
                  }}
                >
                  Logout
                </Link>
              ) : (
                <NavDropdown title="SignIn" id="basic-nav-dropdown">
                  <Link to={"/login"} className="dropdown-item">
                    Patient
                  </Link>
                  {/* TODO */}
                  <a href="http://localhost:3000/" className="dropdown-item">
                    Staff
                  </a>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
