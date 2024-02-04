import "../styles/banner.css";
import eventbg from "../assets/event-bg.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="img-wrap">
        {/* <div className="fade"></div> */}
        <img src={eventbg} alt="audience" />
      </div>
    </div>
  );
};

export default Banner;
