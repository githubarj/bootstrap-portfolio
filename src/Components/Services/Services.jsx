import ServicesData from "./servicesData";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold">Our Services</h1>
          <div className="heading-line mb-1"></div>
        </div>
        <div className="row pt-2 pb-2 mt-1 mb-3">
          <div className="bg-white p-3 col-md-6 border-right">
            <h2 className="fw-bold text-capitalize text-center">
              Our Services range from initial design to deployment anywhere
              anytime
            </h2>
          </div>

          <div className="bg-white p-4 text-start col-md-6">
            <p className="fw-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </div>
        </div>
      </div>
      {/* Start of services section */}
      <div className="container">
        <ServicesData />
      </div>
    </section>
  );
}

export default Services;
