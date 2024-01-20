import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/IMG_0222.JPG";
import Food from "../components/Food";
import About from "../components/About";
import Event from "../components/Event";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩⛩"
        text="Audentic Japanese food in Taichung "
        buttonText="🏯 Make a Booking 🏯"
        url="/"
        btnClass="show"
      />
      <Food />
      <About />
      <Event />
      <Footer />
    </>
  );
}

export default Home;
