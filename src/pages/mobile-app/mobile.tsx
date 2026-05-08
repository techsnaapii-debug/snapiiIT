import { useNavigate } from "react-router-dom";
import mobile from "../../assets/video/App development.mp4";
import ai from "../../../public/static/images/ai-solutions-bg.jpeg";

import VirtualSection from "../../virtual";

interface MobileProps {
  hideVirtual?: boolean;
}

const Mobile = ({ hideVirtual }: MobileProps) => {
  const navigate = useNavigate();

  const cardsData = [
    {
      title: "Create Virtual Worlds with Snapii Metaverse Solutions.",
      desc: "",
    },
    {
      title: "User-Friendly and Modern UI/UX Design.",
      desc: "",
    },
    {
      title: "Fast, Secure, and Scalable Apps",
      desc: "",
    },
    {
      title: "Cross-Platform Development Expertise",
      desc: "",
    },
    {
      title: "Seamless Performance Across Devices",
      desc: "",
    },
    {
      title: "Tailored Apps for Business Growth",
      desc: "",
    },
    {
      title: "Intuitive Features for Better Engagement",
      desc: "",
    },
    {
      title: "End-to-End App Development Services",
      desc: "",
    },
    {
      title: "Innovative Solutions for Every Industry",
      desc: "",
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
            <h2 className="home-header">Mobile Apps Development</h2>

            <p className="text-muted mt-3">
              Your App, Our Way – Built by Experts!
            </p>

            <button className="custom-btn">Get Started</button>
          </div>

          <div className="col-lg-6 d-flex justify-content-center position-relative">
            <div className="video-frame">
              <video autoPlay muted loop>
                <source src={mobile} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="container py-5">
        <h3 className="main-heading text-center trusted-heading">
          Mobile Apps Development ,SNAAPII
        </h3>

        <p className="sub-heading text-center">
          Build Smart. Launch Fast. Scale Confidently.
        </p>

        <p className="service-description ai-subtextext-center">
          Are you planning to strengthen your digital footprint with a brand-new
          mobile app?
          <br />
          We at Snaapii craft ingenious solutions tailored to fit your business
          goals.
        </p>
      </div>

      {/* CARDS */}
      <div className="container py-5">
        <h4 className="text-center trusted-heading">
          Custom Mobile Apps Development Services for Scalable Growth
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

      {/* CTA */}
      <div className="cta-section text-center py-5">
        <h5 className="fw-bold cta-heading">
          Have an AI Product Idea ? Let’s Make It Real
        </h5>

        <h5 className="fw-medium">
          Start Your AI Product Journey. Talk to an AI Expert
        </h5>

        <button
          className="custom-btn mt-3"
          onClick={() => navigate("/contact")}
        >
          Talk to an AI Expert
        </button>
      </div>

      {/* SERVICE SECTION */}
      <div className="sector-section">
        <div className="container-fluid">
          <div className="row g-0">
            {/* LEFT IMAGE */}
            <div className="col-lg-6 left-side">
              <img src={ai} alt="bg" className="img-fluid h-100 w-100" />
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 right-side d-flex align-items-center">
              <div className="content-box">
                <h2 className="heading">
                  Sectors Benefiting
                  <br />
                  <span>from snaapi India's</span>
                  <br />
                  AI Development Services
                </h2>

                <ul className="sector-list">
                  <li>Banking and Finance</li>

                  <li>Entertainment</li>

                  <li>Supply Chain and Logistics</li>

                  <li>Retail E-Commerce</li>

                  <li>Healthcare</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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

export default Mobile;
