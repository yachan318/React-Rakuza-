import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/IMG_0224.JPG";
import Footer from "../components/Footer";
import Event from "../components/Event";

function Menu() {
  return (
    <>
      <Navbar />
      <Hero
        cName="about"
        heroImg={AboutImg}
        title="Menu"
        url="/"
        btnClass="hide"
        is
        Menu
      />
      <Event />
      <Footer />
    </>
  );
}

export default Menu;
