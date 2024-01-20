import resturant from "../assets/IMG_0226.JPG";
import resturant1 from "../assets/IMG_0224.JPG";
import resturant2 from "../assets/IMG_0761.jpg";
import resturant3 from "../assets/IMG_0764.jpg";
import "./FoodStyles.css";
import FoodData from "./FoodData";

const Food = () => {
  return (
    <div className="food">
      <h1> Feel like in Japan</h1>
      <p> One of best in Taichung</p>
      <FoodData
        className="first-des"
        heading=" Discover Robatayaki "
        text=" Robatayaki originated in Sendai City in the Tohoku region. It is the cooking methid that Japanese cooking where ingredients are grilled in front of the resturant guest.
        Sitting in Rakuza.Enjoy the delightful Japanese cuisine with local ingredients."
        img={resturant}
        img1={resturant1}
      />
      <FoodData
        className="first-des-reverse"
        heading="Nigiri, Fresh seafood, seasonal chargrill Veggie"
        text="  come to experience meticulous , Umami seated with a view of the
      chef's workshop, wooden bar and tatami. Best contemporary Japanese
      cusisine you can try in Taichung"
        img={resturant2}
        img1={resturant3}
      />
    </div>
  );
};

export default Food;
