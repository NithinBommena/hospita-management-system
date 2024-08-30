import "./about.css";
import { FiHome } from "react-icons/fi";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import doctor1 from "../Assets/doctor1.jpeg";
import doctor2 from "../Assets/doctor2.jpeg";
import doctor3 from "../Assets/doctor3.jpeg";
import doctor4 from "../Assets/doctor4.jpeg";
import doctor5 from "../Assets/doctor5.jpeg";
import doctor6 from "../Assets/doctor6.png";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function OurTeam() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Doctors</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={doctor2} alt="img" /> {/*TODO- change image*/}
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Kiran Kumar</h4>
                  <span className="text-secondary">Neurologist</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={doctor1} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Alex Woo</h4>
                  <span className="text-secondary">Cardiologist</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={doctor4} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Rachel</h4>
                  <span className="text-secondary">General Physician</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={doctor3} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Rahul Smith</h4>
                  <span className="text-secondary">Physiotherapist</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={doctor5} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Joshi</h4>
                  <span className="text-secondary">Dental</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={doctor6} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Chandra Ravi</h4>
                  <span className="text-secondary">Pathologist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
