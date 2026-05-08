const VirtualSection = () => {
  return (
    <div className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6 mb-4 mb-lg-0">

            <h1 className="contact-heading">
              Join Us <br />
              For a Virtual Coffee
            </h1>

            <p className="contact-subtext">
              Where connections are brewed,
              ideas percolate, and inspiration flows!
            </p>

            <div className="d-flex gap-3 flex-wrap mt-4">
              <button className="btn write-btn">
                Write us
              </button>

              <button className="btn call-btn">
                Book a call
              </button>
            </div>

            <button className="btn faq-btn mt-4">
              Read FAQ
            </button>

          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="form-card">

              <h3 className="form-title">
                Your Innovation Partner Awaits!
              </h3>

              <p className="form-subtext">
                Let’s hear about your project.
              </p>

              <form>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control mb-3"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control mb-3"
                />

                <textarea
                  rows={4}
                  placeholder="Message"
                  className="form-control mb-3"
                />

                <button
                  type="submit"
                  className="btn submit-btn w-100"
                >
                  Submit
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VirtualSection;