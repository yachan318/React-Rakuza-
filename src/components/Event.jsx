import EventData from "./EventData";
import Event0 from "../assets/IMG_0220.JPG";
import Event1 from "../assets/image0.jpeg";
import Event2 from "../assets/image1.jpeg";

function Event() {
  return (
    <div className="Event">
      <h1>New events</h1>
      <p>Discover New Events in Rakuza.</p>
      <div className="eventcard">
        <EventData
          image={Event0}
          heading="Japanese Ema giveaway"
          text="Ema is small wooden plaques, common to Japan, in which Shinto and Buddhist worshippers write prayers or wishes. Ema are left hanging up at the shrine, where the kami (spirits or gods) are believed to receive them. Wanna experience the Ema? come to Rakuza for different experiencement and fun! "
        />

        <EventData
          image={Event1}
          heading="Japan Soft Drink Festival"
          text="Ramune soda was originally developed in the 1850s but came into its own in 1888 when it began to be packaged in its iconic 'codd-neck' bottles. It's become Japan's national soft drink, and especially popular during the summertime and festivals. Now you can try it in Rakuza in store! There are KiMURA Soda drink, Shizuoka Melon Soda,Shizuoka peach Soda "
        />

        <EventData
          image={Event2}
          heading="Japanese SaKa Festival"
          text="Japanese alcoholic beverage made from fermented rice. Sake is light in colour, is noncarbonated, has a sweet flavour, and contains about 14 to 16 percent alcohol. There are different Sake produce from different area of Japan! If you are a fan of Sake. You definitelt can not miss it! "
        />
      </div>
    </div>
  );
}

export default Event;
