
import techImg from "../../../public/static/images/ai-developer.png";
import VirtualSection from "../../virtual";
function About() {
  return (
    <div>
      <div className="tech-section">
               <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="container text-center">
          {/* Top Box */}
          <div className="top-box mb-4">
            <div className="inner-box">
              <img src={techImg} alt="tech" className="inner-image" />
            </div>
          </div>
          {/* Heading */}
          <h2 className="trusted-heading">
            We’re Your Tech Partners <br />
            for Your Digital Footprints
          </h2>

          {/* Description */}
          <p className="ai-subtext">
            At Snaapi India, we bring your ideas to life with cutting-edge
            technology and AI-driven innovation. With 15+ years of expertise,
            our passionate team crafts future-ready solutions in blockchain,
            metaverse, AI, mobile and game development, and custom software
            —helping businesses thrive in the digital era.From AI-powered
            automation to decentralized platforms, blockchain layer solutions,
            and immersive metaverse experiences, we build scalable, secure, and
            intuitive products designed to give you a competitive edge. Our
            client-first approach ensures personalized solutions, backed by
            exceptional support to keep your business ahead of the curve.
          </p>
        </div>
      </div>

      <div className="stats-section py-5">
        <div className="container">
          {/* Heading */}
          <h2 className="stats-heading text-center mb-5">
            We at snaapi Create Customer Success Strategies and Implement
            Them into solutions
          </h2>

          {/* Row 1 */}
          <div className="row align-items-center mb-5 justify-content-center">
    
            <div className="col-lg-6">
              <p className="stats-text">
                Analyze the market needs for future tech and started before 15+
                years ago with the vision to create benchmark for blockchain,
                metaverse and ai development.
              </p>
            </div>

            <div className="col-lg-6 text-lg-end text-center mt-3 mt-lg-0">
              <div className="stats-box">2026</div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2">
              <p className="stats-text">
                Delivered projects in blockchain, ai, metaverse, web and mobile
                app solutions.
              </p>
            </div>

            <div className="col-lg-6 text-lg-start text-center mt-3 mt-lg-0 order-lg-1">
              <div className="stats-box">200+</div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="stats-text">
                With a team of experts, we have successfully delivered
                innovative solutions across industries such as finance,
                healthcare, e-commerce, education, real estate, gaming, and
                supply chain.
              </p>
            </div>

            <div className="col-lg-6 text-lg-end text-center mt-3 mt-lg-0">
              <div className="stats-box">10+</div>
            </div>
          </div>
        </div>
      </div>

        <div className="coffee-section py-5">
         {/* virtual-section */}
       <div className="contact-section py-5">
         <VirtualSection />
      </div>
    </div>
    </div>
  );
}

export default About;
