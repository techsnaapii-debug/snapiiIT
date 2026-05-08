import { useNavigate } from "react-router-dom";
import ai from "../../assets/video/AI development....mp4";

import VirtualSection from "../../virtual";

interface AiProps {
  hideVirtual?: boolean;
}

const Ai = ({ hideVirtual }: AiProps) => {
  const navigate = useNavigate();

  const cardsData = [
    {
      title: "Where Innovation Meets Intelligence",
      desc: "Building Smarter Futures with Our AI Development Services.",
    },
    {
      title: "Create Virtual Worlds with Snapii Metaverse Solutions.",
      desc: "Transforming Ideas into Intelligent Solutions.",
    },
    {
      title: "Shaping Digital Realities Through Metaverse Innovation.",
      desc: "Empowering Growth Through AI Innovation.",
    },
  ];

  return (
    <div className="metaverse-page">
      {/* BUBBLES */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>

      {/* HERO SECTION */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="home-header">AI Development In India</h2>

            <p className="text-muted mt-3">
              Build Smart AI Solutions with Snaapii
            </p>

            <button className="custom-btn mt-3">Get Started</button>
          </div>

          <div className="col-lg-6 d-flex justify-content-center position-relative">
            <div className="video-frame">
              <video autoPlay muted loop>
                <source src={ai} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="container py-5">
        <h3 className="main-heading text-center trusted-heading">
          Accelerating to Build a Smart, Intelligent, Futuristic Vision
        </h3>

        <p className="service-description ai-subtext  text-center">
          Are you all set to step into the new future of machine intelligence
          but cannot decide on the starting point?
          <br />
          We at Snaapii are here to lay the path ahead.
          <br />
          Whether you want to incorporate a smart recommendation engine or
          develop an AI-based chatbot, we have got it covered.
        </p>
      </div>

      {/* CARDS SECTION */}
      <div className="container py-5">
        <h4 className="text-center card-info trusted-heading">
          Craft Intelligent Solutions with Our AI Development Services
        </h4>

        <div className="row g-4 py-3">
          {cardsData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card service-card h-100">
                <div className="card-body">
                  <h6 className="fw-bold">{item.title}</h6>

                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta-section text-center py-5">
        <h5 className="fw-bold trusted-heading">
          Build Your AI Product with Snaapii
        </h5>

        <h5 className="fw-medium">Smart. Scalable. Future-Ready.</h5>

        <button
          className="custom-btn mt-3"
          onClick={() => navigate("/contact")}
        >
          Talk To Experts
        </button>
      </div>

      {/* SHOW ONLY WHEN NEEDED */}
      {!hideVirtual && (
        <div className="contact-section py-5">
          <VirtualSection />
        </div>
      )}
    </div>
  );
};

export default Ai;
