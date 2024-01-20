import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Rakuza Robatayaki</h1>
          <p>Experience authentic Robatayaki</p>
        </div>
        <div>
          <a
            href="
https://www.facebook.com/Rakuzarobatayaki2/about/"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-solid fa-car"></i>
          </a>
        </div>
      </div>

      <div className="under">
        <div>
          <h4>General</h4>
          <a href="/"> About us </a>
          <a href="/"> What's on </a>
          <a href="/"> Special offers</a>
          <a href="/"> Events </a>
        </div>
        <div>
          <h4>Customer Services </h4>
          <a href="/">Reservation</a>
          <a href="/"> Plan your visit </a>
          <a href="/"> Contact us</a>
          <a href="/"> </a>
        </div>
        <div>
          <h4>Careers</h4>
          <a href="/"> Careers Overviews</a>
          <a href="/"> Current</a>
          <a href="/"> Opportunities</a>
          <a href="/"> Join us! </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
