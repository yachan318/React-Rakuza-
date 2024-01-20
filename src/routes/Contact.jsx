import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/IMG_0223.JPG";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Contact"
        heroImg={AboutImg}
        title="Contact Rakuza"
        url="/"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Contact;
