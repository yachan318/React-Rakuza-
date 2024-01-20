import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="contactUs">
      <h1> Message Us ! </h1>
      <form>
        <input placeholder=" Name" />
        <input placeholder=" Email" />
        <input placeholder=" Phone" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button> Send </button>
      </form>
    </div>
  );
}

export default ContactUs;
