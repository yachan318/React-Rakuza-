import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/IMG_0225.JPG";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="about"
        heroImg={AboutImg}
        title="About Rakuza"
        url="/"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
