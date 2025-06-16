import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-text">
              {/* <video autoPlay muted loop className="background-video">
          <source src="/assets/BackgroundVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
      <div className="text1">

        <h1>Streamline Returns with Blockchain!</h1>
        <p>
          A smarter way to handle e-commerce returns — transparent, fast, and
          secure reverse logistics powered by blockchain.
        </p>

        <Link to="/customer-dashboard">
          <button className="cta-btn">Get Started</button>
        </Link>
      </div>

      <div className="text2">
        Smarter Returns. <br />
        Faster Refunds. <br />
        Verified Every Step.
      </div>
    </section>
  );
}
