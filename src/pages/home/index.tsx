import { useRef } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "../../assets/video/Blockchain development.mp4";
import trust from "../../../public/static/images/Trusted By Clients, Celebrated By The Industry.jpg.webp";
import techImg from "../../../public/static/images/ai-developer.png";
import idea from "../../../public/static/images/idea Build.webp";
import mind from "../../../public/static/images/mind at work imges 2.jpg.webp";
import global from "../../../public/static/images/global hubs.jpg.webp";
import hapiness from "../../../public/static/images/happy client.jpg.webp";
import img1 from "../../../public/static/images/blockchain.webp";
import img2 from "../../../public/static/images/metaverse.webp";
import img3 from "../../../public/static/images/app-development.webp";
import img4 from "../../../public/static/images/web-development.jpeg";
import img5 from "../../../public/static/images/AI Solutions.jpeg";
import VirtualSection from "../../virtual";

const services = [
  {
    title: "Full-stack Development",
    img: "/public/static/images/Full Stock Development....webp",
  },
  {
    title: "Mobile App Development",
    img: "/public/static/images/mobile app development...webp",
  },
  {
    title: "Business Analysis",
    img: "/public/static/images/Buisness analysis.webp",
  },
  {
    title: "UI/UX Design",
    img: "public/static/images/UI UX .jpg.webp",
  },
  {
    title: "Blockchain Development",
    img: "public/static/images/blockchain.webp",
  },
  {
    title: "AI Solutions",
    img: "public/static/images/AI Solutions.jpeg",
  },
  {
    title: "Cloud Services",
    img: "public/static/images/Cloud Service.jpg.jpeg",
  },
  {
    title: "Web Development",
    img: "public/static/images/web-development.jpeg",
  },
];
/* DATA */
const serviceCards = [
  {
    title: "Blockchain Development",
    desc: "Build trust. Scale smarter. Go blockchain. Where your innovation meets decentralization.",
    image: img1,
    large: true,
  },
  {
    title: "Mobile App Development",
    desc: "Crafting mobile experiences that matter And Elevate your business with smart snd interactive mobile apps",
    image: img4,
    large: true,
  },
  {
    title: "AI Development",
    desc: "Turning ideas into intelligent solutions. Build smarter with AI and Intelligence that drives growth.",
    image: img5,
    large: true,
  },
  {
    title: "Metaverse Development",
    desc: "At Snapii, we Redefining interaction through the metaverse.Where reality meets the metaverse.",
    image: img2,
    large: true,
  },
  {
    title: "Web Development",
    desc: "User-friendly web solutions.",
    image: img3,
    large: true,
  },
];

const _stats = [
  { title: "Ideas Built", value: "894" },
  { title: "Minds at Work", value: "220+" },
  { title: "Global Hubs", value: "6" },
  { title: "Client Happiness", value: "97%" },
];

console.log(_stats);

function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div>
      {/* SECTION 1 */}
      <section className="hero-section position-relative">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>

        <div className="container-fluid px-5">
          <div className="row align-items-center min-vh-md-100">
            <div className="col-lg-6">
              <h2 className="home-header">Blockchain Development</h2>
            </div>

            <div className="col-lg-6 d-flex justify-content-center position-relative">
              <div className="video-frame">
                <video autoPlay muted loop>
                  <source src={home} type="video/mp4" />
                </video>
              </div>

              {/* small bubble near video */}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="text-center py-5">
        <div className="container">
          <p className="trusted-heading text-black">Experience Our Top-Tier</p>
          <h1 className="trusted-heading">Snaapi Development Services</h1>

          {/* SERVICES BUTTON */}
          <div className="text-center mt-3">
            <button
              className="custom-btn"
              onClick={() => navigate("/services")}
            >
              Services
            </button>
          </div>
          <p className="description mt-4 ai-subtext">
            At Snapii, we specialize in cutting-edge technologies, delivering
            interactive Web3 solutions that drive innovation in the snappi
            ecosystem.* Our expertise in Web3 development enables seamless,
            secure, and scalable digital experiences, bridging the gap between
            users, devices, and decentralized platforms. We focus on creating
            intuitive interfaces and robust systems that make next-generation
            web interactions smooth, efficient, and future-ready.
          </p>
          {/* small bubble near video */}
        </div>

        {/* CARDS */}
       <div className="container my-5">
  <div className="row">

    {/* LEFT */}
    <div className="col-lg-6 d-flex flex-column gap-4">

      {serviceCards
       .filter((_, i) => i === 0 || i === 2 || i === 4)
        .map((card, i) => (

          <div
            className="custom-card"
            key={i}

            onClick={() => {
              if (card.title === "Blockchain Development") {
                navigate("/blockchain");
              }

              if (card.title === "AI Development") {
                navigate("/ai-development");
              }

              if (card.title === "Web Development") {
                navigate("/web");
              }
            }}
          >

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

            <button>Free Consultation</button>

            <div className="my-3">
              <img
                src={card.image}
                alt={card.title}
                className="img-fluid my-2"
              />
            </div>

          </div>

        ))}
    </div>

    {/* RIGHT */}
    <div className="col-lg-6 d-flex flex-column gap-4">

      {serviceCards
   .filter((_, i) => i === 1 || i === 3)
        .map((card, i) => (

          <div
            className="custom-card"
            key={i}

            onClick={() => {
              if (card.title === "Mobile App Development") {
                navigate("/mobile-app");
              }

              if (card.title === "Metaverse Development") {
                navigate("/metaverse");
              }
            }}
          >

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

            <button>Free Consultation</button>

            <div className="mt-3">
              <img
                src={card.image}
                alt={card.title}
                className="img-fluid"
              />
            </div>

          </div>

        ))}
    </div>

  </div>
</div>
      </section>

      <section className="ai-hero position-relative pb-5">
        {/* BUBBLES */}
        <div className="bubble bubble-left"></div>
        <div className="bubble bubble-small"></div>

        <div className="container">
          <div className="row align-items-center min-vh-100">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="trusted-heading pt-5">
                Build Faster & <br />
                Smarter with Our <br />
                AI-Development
              </h1>

              <p className="ai-subtext mt-4">
                We’re an AI-driven development company that integrates AI across
                every phase of development to deliver faster, smarter results.
                Need proof?
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 d-flex justify-content-center position-relative mt-5 mt-lg-0">
              <img src={techImg} alt="tech" className="inner-image" />
            </div>
            <h2 className="heading text-center py-3">
              We're an AI-driven development company
            </h2>

            <div className="w-auto d-flex align-items-center justify-content-center m-auto">
              <button className="custom-btn ">Start Now</button>
            </div>
          </div>
        </div>
        <div className="bubble bubble-ai-top"></div>
        <div className="bubble bubble-ai-right"></div>
      </section>

      {/* SECTION 3 (Service SWIPER) */}
      <section className="container swiper-section py-5">
        <div className="swiper-wrapper-custom position-relative">
          {/* Arrows */}
          <button ref={prevRef} className="arrow left">
            ❮
          </button>

          <button ref={nextRef} className="arrow right">
            ❯
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={800}
            spaceBetween={20}
            slidesPerGroup={1}
            /* Desktop default */
            slidesPerView={4}
            /* Auto Swipe */
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },

              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            className="service-swiper"
          >
            {services.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="service-card">
                  {/* Image */}
                  <div className="card-top">
                    <img src={item.img} alt={item.title} />
                  </div>

                  {/* Title */}
                  <h5 className="mt-3">{item.title}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* SECTION 4 */}
      <section className="trusted-section">
        <div className="bubble bubble-left"></div>
        <div className="bubble bubble-small"></div>
        <div className="bubble bubble-3"></div>
        <div className="container">
          {/* TOP ROW */}
          <div className="bubble bubble-left"></div>
          <div className="bubble bubble-small"></div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h1 className="trusted-heading">
                Trusted By <br />
                Clients,Celebrated <br />
                By The Industry
              </h1>

              <p className="trusted-subtext mt-3">
                Whether it’s global awards or top review platforms our work
                keeps making where it matters.
              </p>
            </div>

            <div className="col-lg-6 d-flex  mt-4 mt-lg-0">
              <div className="">
                <img src={trust} alt="trust" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* GRID CONTENT */}
          <div className="row g-4">
            {/* LEFT CARD */}
            <div className="col-lg-4">
              <div className="stat-card">
                <div className="card-top">
                  <img src={idea} alt="trust" className="img-fluid" />
                </div>
                <div className="card-bottom">
                  <span>Ideas Built</span>
                  <h2>894</h2>
                </div>
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="col-lg-4 d-flex align-items-center">
              <p className="side-text">
                We bring industry - tested expertise to every sector we build
                for , be it complex or everyday tech.
              </p>
            </div>

            {/* CARD */}
            <div className="col-lg-4">
              <div className="stat-card">
                <div className="card-top">
                  <img src={mind} alt="trust" className="img-fluid" />
                </div>
                <div className="card-bottom">
                  <span>Minds at Work</span>
                  <h2>220+</h2>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="col-lg-4 d-flex align-items-center">
              <p className="side-text">
                We’ve partnered with Fortune 500s to solve high-stakes
                challenges at scale.
              </p>
            </div>

            {/* CARD */}
            <div className="col-lg-4">
              <div className="stat-card">
                <div className="card-top">
                  <img src={global} alt="trust" className="img-fluid" />
                </div>
                <div className="card-bottom">
                  <span>Global Hubs</span>
                  <h2>6</h2>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className="col-lg-4">
              <div className="stat-card">
                <div className="card-top">
                  <img src={hapiness} alt="trust" className="img-fluid" />
                </div>
                <div className="card-bottom">
                  <span>Client Happiness</span>
                  <h2>97%</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bubble bubble-trust"></div>
        <div className="bubble bubble-trust-2"></div>
      </section>
       {/* virtual-section */}
       <div className="contact-section py-5">
         <VirtualSection />
      </div>
    </div>
  );
}

export default Home;
