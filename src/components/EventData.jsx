import "./Event.css";
import Event from "./Event";

function EventData(props) {
  return (
    <div className="e-card">
      <div class="e-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default EventData;
