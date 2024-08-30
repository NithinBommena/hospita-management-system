import AboutUs from "../Sections/aboutus";
import Banner from "../Sections/banner";
import Footer from "../Sections/footer";
import NavBars from "../Sections/navbar";
import Services from "../Sections/services";
import Services2 from "../Sections/services2";
import ToTop from "../Sections/totop";

function Home() {
  return (
    <div>
      <NavBars />
      <AboutUs />
      <ToTop />
    </div>
  );
}

export default Home;
