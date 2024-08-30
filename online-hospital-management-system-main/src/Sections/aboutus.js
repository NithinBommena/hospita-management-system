import about1 from "../Assets/pic-1.ad1ed7ee.jpg";
import about2 from "../Assets/pic-2.0593bc2f.jpg";
import about3 from "../Assets/pic-3.fa689b10.jpg";
import hospital from "../Assets/hospital-new.png"
import { FaAmbulance, FaBed, FaSyringe } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import "./aboutus.css"
function AboutUs() {
  return (
    <div >
      <section className="section about-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <div className="hospital-images">
                <img className ="image-width" src={hospital} alt="hospital"/>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="heading-bx">
                <h2 className="title">
                  We offer all services with excellence
                </h2>
              </div>
              <div className="row">
              <div className="col-lg-6 col-sm-6 mb-30">
                  <div className="feature1">
                    <div className="icon-md">
                      <span className="icon-cell">
                        <IoWater />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4>Best Doctors and Lab Professionals</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 mb-30">
                  <div className="feature1">
                    <div className="icon-md">
                      <span className="icon-cell">
                        <FaAmbulance />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4>Emergency Assistance</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 mb-30">
                  <div className="feature1">
                    <div className="icon-md">
                      <span className="icon-cell">
                        <FaBed />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4>Bed Facilities</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 mb-30">
                  <div className="feature1">
                    <div className="icon-md">
                      <span className="icon-cell">
                        <FaSyringe />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4>Medical Treatment</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
