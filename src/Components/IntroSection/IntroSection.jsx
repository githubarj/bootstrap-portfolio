import PillButton from "../Button/PillButton";
import { FaArrowRight } from "react-icons/fa";

function IntroSection() {
  return (
    <section id="id" className="intro-section">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-6 intros">
            <h1 className="display-2">
              <span className="display-2--intro">Hey!, I&apos;m Richard</span>
              <span className="display-2--description lh-base">
                I am a software developer based in Nairobi , Kenya. Lets talk
                JavaScript/React and Java/Spring Boot
              </span>
            </h1>
            <PillButton icon={<FaArrowRight />} content="Get in touch" />
          </div>
          <div className="col-md-6 intros text-end">
            <div className="video-box">
              <img
                src="/Images/Illustrations/intro-section-illustration.png"
                alt="video illustration"
                className="image-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
