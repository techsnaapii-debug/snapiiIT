import { useNavigate } from "react-router-dom";
import meta from "../../assets/video/Mera verse.mp4";
import VirtualSection from "../../virtual";

interface MetaverseProps {
  hideVirtual?: boolean;
}

const Metaverse = ({ hideVirtual }: MetaverseProps) => {
  const navigate = useNavigate();

  const cardsData = [
    {
      title: "Where Innovation Meets Immersive Reality",
      desc: "Building New Realities with Our Metaverse Development Services.",
    },
    {
      title: "Designing the Future of Digital Interaction",
      desc: "Create Virtual Worlds with Snapii Metaverse Solutions.",
    },
    {
      title: "Build Beyond Reality with Snapii.",
      desc: "Shaping Digital Realities Through Metaverse Innovation.",
    },
  ];

  return (
    <div className="metaverse-page">
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>

      {/* HERO SECTION */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="home-header">Metaverse Development</h2>

            <p className="text-muted mt-3">
              Metaverse Development Company to build immersive digital
              experiences.
            </p>

            <button className="custom-btn mt-3">Get Started</button>
          </div>

          <div className="col-lg-6 d-flex justify-content-center position-relative">
            <div className="video-frame">
              <video autoPlay muted loop>
                <source src={meta} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="container py-5">
        <h3 className="trusted-heading text-center">
          Metaverse Development Company in India
        </h3>

        <p className="sub-heading text-center">
          Immersive, Limitless & Scalable Innovation with Metaverse
        </p>

        <p className="service-description main-heading ai-subtext text-center">
          Being a pioneer Metaverse Development Company in India, we specialize
          in creating immersive virtual experiences that transform digital
          interactions.
          <br />
          From gaming and social platforms to enterprise solutions, we craft
          innovative environments that redefine engagement.
        </p>
      </div>

      {/* CARDS */}
      <div className="container py-5">
        <h4 className="text-center card-info trusted-heading">
          Craft Realities Together with Our Metaverse Development Service
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
        <h5 className="fw-bold trusted-heading">
          Turn Your Business into an Immersive Experience
        </h5>

        <h5 className="fw-medium">Secure. Scalable. Future-Ready.</h5>

        <button
          className="custom-btn mt-3"
          onClick={() => navigate("/contact")}
        >
          Contact Us
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

export default Metaverse;
