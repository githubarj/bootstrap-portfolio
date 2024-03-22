function Companies() {
  return (
    <section id="companies">
      <div className="container">
        <div className="row text-center ">
          <h4 className="fw-bold lead mb-3 ">Trusted by companies like</h4>
          <div className="heading-line mb-5"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="col-md-4" key={index}>
              <div className="companies__logo-box">
                <img
                  src={`/public/Images/companies/campany-${index + 1}.png`}
                  alt="company1 logo"
                  title={`company ${index + 1} logo`}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
