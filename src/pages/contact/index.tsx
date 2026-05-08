

function Contact() {
  return (
    <div className="main-wrapper">
      <div className="form-container">
        <h2 className="form-title">Your Innovation Partner Awaits!</h2>

        <p className="form-subtitle">
          Let’s hear about your project. Drop us the details or send us a{" "}
          <a href="#">direct email</a>
        </p>

        <form>
          <input
            type="text"
            placeholder="Enter Your name"
            className="form-input"
          />

          <input
            type="email"
            placeholder="Enter Your email"
            className="form-input"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="form-input"
          />

          <textarea
            placeholder="Enter your message"
            className="form-input textarea"
          ></textarea>

          {/* CAPTCHA */}
          <div className="captcha-wrapper">
            <div className="captcha-left">
              <input type="checkbox" />
              <span>I'm not a robot</span>
            </div>

            <div className="captcha-spinner"></div>
          </div>

          <button className="contact-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
