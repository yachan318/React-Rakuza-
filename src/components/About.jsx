import AboutData from "./AboutData";
import "./AboutStyles.css";
import About0 from "../assets/IMG_0227.JPG";
import About1 from "../assets/IMG_0222.JPG";
import About2 from "../assets/IMG_0224.JPG";

function About() {
  return (
    <div className="About">
      <h1> Welcome to Rakuza Robatayaki </h1>
      <p> Discover New experience in Rakuza.</p>
      <div className="Aboutcard">
        <AboutData image={About0} heading="Japanese Ema giveaway" text="" />
        <AboutData image={About1} heading="Japan Soft Drink Festival" text="" />
        <AboutData image={About2} heading="Japanese SaKa Festival" text="" />
      </div>
    </div>
  );
}

export default About;
