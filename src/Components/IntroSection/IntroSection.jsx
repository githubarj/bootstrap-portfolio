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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L34.3,208C68.6,224,137,256,206,266.7C274.3,277,343,267,411,250.7C480,235,549,213,617,224C685.7,235,754,277,823,261.3C891.4,245,960,171,1029,133.3C1097.1,96,1166,96,1234,106.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default IntroSection;
