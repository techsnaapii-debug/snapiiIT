
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">
          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="bbbb">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link className=" text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className=" text-decoration-none" to="/know">
                  Know Us
                </Link>
              </li>
              <li>
                <Link className=" text-decoration-none" to="/blog">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className=" text-decoration-none" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className=" text-decoration-none" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <button className="google-btn mt-3">
              Add as a preferred source on google
            </button>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5>Services</h5>
            <ul className="footer-links">
              <li>
                <Link className=" text-decoration-none" to="/blockchain">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link className=" text-decoration-none" to="/ai-development">
                  AI Apps
                </Link>
              </li>
              <li>
                <Link className=" text-decoration-none" to="/mobile-app">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link className=" text-decoration-none" to="/game">
                  Game Apps
                </Link>
              </li>
              <li>
                <Link className=" text-decoration-none" to="/metaverse">
                  Metaverse
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-lg-4 col-md-6">
            <h5>Our H.Q. - Locate Us</h5>

            <p>
              <strong>Uttar Pradesh :</strong>
              <br />
              +91 95109 87700 216, RETVA, SADHAPUR, Dewarh
              <br />
              Lambhua, Sultanpur- 222303, <br />
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-3 col-md-6 text-lg-end">
            <h4 className="email">business.snaapii@.com</h4>

            {/* Social Icons */}
            <div className="social-icons my-3">
              <a href="#">F</a>
              <a
                href="https://youtube.com/@snaapii?si=ewNqkSwum2iqKhRG"
                className="text-black text-decoration-none"
                target="_blank"
              >
                ▶
              </a>
              <a href="#">📷</a>

              <a href="https://x.com/_snaapii"  className="text-black text-decoration-none"  target="_blank">𝕏</a>
              <a
                href="https://www.linkedin.com/company/snaapii-official/"
                className="text-black text-decoration-none"
                target="_blank"
              >
                in
              </a>
            </div>

            <h5>Subscribe to Newsletter</h5>

            <input
              type="email"
              placeholder="Enter your email"
              className="form-control my-3"
            />

            <button className="submit-btn">Submit</button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom d-flex justify-content-between mt-5">
          <p>© 2026 Snapii. All rights reserved.</p>
          <p>A Unit of Snapii Services Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
