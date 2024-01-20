import { Component } from "react";
import resturant from "../assets/IMG_0226.JPG";
import resturant1 from "../assets/IMG_0224.JPG";
import resturant2 from "../assets/IMG_0761.jpg";
import resturant3 from "../assets/IMG_0764.jpg";
import "./FoodStyles.css";
class FoodData extends Component {
  render() {
    return (
      <div className="first-des">
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img} />
          <img alt="img" src={this.props.img1} />
        </div>
      </div>
    );
  }
}

export default FoodData;
