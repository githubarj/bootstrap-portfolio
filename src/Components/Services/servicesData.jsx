import {
  FaPaperPlane,
  FaArrowRight,
  FaCode,
  FaCloudUploadAlt,
} from "react-icons/fa";
import PillButton from "../Button/PillButton";

export default function ServicesData() {
  const data = [
    {
      title: "Marketing",
      icon: <FaPaperPlane />,
    },
    {
      title: "Web Development",
      icon: <FaCode />,
      fd: "row-reverse",
    },
    {
      title: "Cloud Hosting",
      icon: <FaCloudUploadAlt />,
    },
  ];

  return data.map((item, index) => (
    <div
      className="row justify-content-between"
      key={index}
      style={{ flexDirection: item.fd }}
    >
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services__content">
          <div className="icon">{item.icon}</div>
          <h3 className="display-3--title mt-1">{item.title}</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
          <PillButton
            content="Learn More"
            icon={<FaArrowRight />}
            border="add-border"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services__pic">
          <img
            src={`/public/Images/services/service-${index + 1}.png`}
            alt={`${item.title}-illustration`}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  ));
}
