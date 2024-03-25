import Companies from "../../Components/Companies/Companies";
import IntroSection from "../../Components/IntroSection/IntroSection";
import Services from "../../Components/Services/Services";

function LandingPage() {
  return (
    <div>
      <IntroSection />
      <Companies />
      <Services />
    </div>
  );
}

export default LandingPage;
