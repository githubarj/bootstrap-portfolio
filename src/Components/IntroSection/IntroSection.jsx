import PillButton from "../Button/PillButton";
import { FaArrowRight } from "react-icons/fa";

function IntroSection() {
  return (
    <section id="id" className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 intros">
            <h1 className="display-2">
              <span className="display-2--intro">Hey!, I&apos;m Richard</span>
              <span className="display-2--description">
                this is a multi purpose responsive layout created with bootstrap
                v5(add more description later)
              </span>
            </h1>
            <PillButton icon={<FaArrowRight />} content="Get in touch" />
          </div>
          <div className="col-md-6 intros"></div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
